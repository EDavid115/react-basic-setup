import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const CountStateContext = createContext();
const CountDispatchContext = createContext();

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        count: state.count + 1,
      };
    }
    case 'DECREMENT': {
      return {
        count: state.count - 1,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

const useCountState = () => {
  const context = useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};
const useCountDispatch = () => {
  const context = useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
};

CountProvider.propTypes = {
  children: PropTypes.node,
};
CountProvider.defaultProps = {
  children: null,
};
export { CountProvider, useCountState, useCountDispatch, actionTypes };
