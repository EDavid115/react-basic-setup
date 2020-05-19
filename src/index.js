import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CountProvider } from './components/count-context';

import './App.scss';

if ('serviceWorker' in navigator) {
  runtime.register();
}

ReactDOM.render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
  document.getElementById('app'),
);
