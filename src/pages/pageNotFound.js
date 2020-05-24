import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 Page Not Found</h1>
    <div>
      <Link to="/">
        <p>Go Back Home</p>
      </Link>
    </div>
  </div>
);

export default NotFound;
