/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const history = useHistory();

  // Cookies Names
  const CookiesNames = {
    userToken: '_user_token',
    expiresAt: '_expires_at',
    userInfo: '_user_info',
  };

  const token = Cookies.get(CookiesNames.userToken);
  const expiresAt = Cookies.get(CookiesNames.expiresAt);
  const userInfo = Cookies.get(CookiesNames.userInfo);

  const [authState, setAuthState] = useState({
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });

  const setAuthInfo = ({ token, expiresAt, userInfo }) => {
    Cookies.set(CookiesNames.userToken, token);
    Cookies.set(CookiesNames.expiresAt, expiresAt);
    Cookies.set(CookiesNames.userInfo, JSON.stringify(userInfo));

    setAuthState({
      token,
      expiresAt,
      userInfo,
    });
  };

  const logout = () => {
    Cookies.remove(CookiesNames.userToken);
    Cookies.remove(CookiesNames.expiresAt);
    Cookies.remove(CookiesNames.userInfo);
    setAuthState({});
    history.push('/login');
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const isAdmin = () => authState.userInfo.role === 'admin';

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
AuthProvider.defaultProps = {
  children: null,
};

export { AuthContext, AuthProvider };
