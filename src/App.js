import React from 'react';
import {
  useCountState,
  useCountDispatch,
  actionTypes,
} from './components/count-context';

const CountDisplay = () => {
  const { count, user } = useCountState();
  return <div>{`The current count is ${count}, userName ${user}`}</div>;
};

const Counter = () => {
  const dispatch = useCountDispatch();
  return (
    <button
      onClick={() =>
        dispatch({
          type: actionTypes.SET_USER,
          user: 'er',
        })
      }
    >
      Increment countd
    </button>
  );
};

const App = () => (
  <div className="container">
    <h1>Hello World, React! {process.env.ENV}</h1>
    <CountDisplay />
    <Counter />
  </div>
);

export default App;
