import React from 'react';
import NavBar from '../components/Links';

const PageOne = () => (
  <div>
    <NavBar />
    <h1>Hello World, React! {process.env.ENV}</h1>
    <h1>Página 1</h1>
  </div>
);

export default PageOne;
