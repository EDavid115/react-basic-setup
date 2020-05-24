import React from 'react';
import {
  useCountState,
  useCountDispatch,
  actionTypes,
  CountProvider,
} from '../context/count-context';
import NavBar from '../components/Links';

const CountDisplay = () => {
  const { count } = useCountState();
  return <div>{`The current count is ${count}`}</div>;
};

const Add = () => {
  const dispatch = useCountDispatch();
  return (
    <button
      onClick={() =>
        dispatch({
          type: actionTypes.INCREMENT,
        })
      }
    >
      Increment count
    </button>
  );
};

const Remove = () => {
  const dispatch = useCountDispatch();
  return (
    <button
      onClick={() =>
        dispatch({
          type: actionTypes.DECREMENT,
        })
      }
    >
      Decrement count
    </button>
  );
};

const PageTwo = () => (
  <CountProvider>
    <div>
      <NavBar />
      <h1>Página 2</h1>
      <CountDisplay />
      <Add />
      <Remove />
    </div>
  </CountProvider>
);

export default PageTwo;
