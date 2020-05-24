import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';
import AppRoutes from './Routes';

const App = () => (
  <Router>
    <AuthProvider>
      <FetchProvider>
        <div className="container">
          <AppRoutes />
        </div>
      </FetchProvider>
    </AuthProvider>
  </Router>
);

export default App;
