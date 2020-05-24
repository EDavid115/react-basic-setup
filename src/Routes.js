import React, { lazy, Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PageOne = lazy(() => import('./pages/pageOne'));
const PageTwo = lazy(() => import('./pages/pageTwo'));
const PageAuth = lazy(() => import('./pages/pageAuth'));
const PageAdmin = lazy(() => import('./pages/pageAdmin'));
const PageNotFound = lazy(() => import('./pages/pageNotFound'));

const LoadingFallback = () => <div>Loading...</div>;

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/two">
      <PageTwo />
    </Route>
    <Route path="/">
      <PageOne />
    </Route>
    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        // TODO: Activar comprobación de autenticación (quitar !)
        !auth.isAuthenticated() ? <div>{children}</div> : <Redirect to="/" />
      }
    />
  );
};

const AdminRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        // TODO: Activar comprobación de autenticación y role (quitar !)
        !auth.isAuthenticated() && !auth.isAdmin() ? (
          <div>{children}</div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const AppRoutes = () => (
  <>
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <AuthenticatedRoute path="/auth">
          <PageAuth />
        </AuthenticatedRoute>
        <AdminRoute path="/admin">
          <PageAdmin />
        </AdminRoute>
        <UnauthenticatedRoutes />
      </Switch>
    </Suspense>
  </>
);

AuthenticatedRoute.propTypes = {
  children: PropTypes.node,
};
AuthenticatedRoute.defaultProps = {
  children: null,
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};
AdminRoute.defaultProps = {
  children: null,
};
export default AppRoutes;
