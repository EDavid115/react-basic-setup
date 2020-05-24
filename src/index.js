// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './static/styles/App.scss';

if ('serviceWorker' in navigator) {
  // runtime.register();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
