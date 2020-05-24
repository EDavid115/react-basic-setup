import React, { useState } from 'react';
import { Container, Title } from './styles';
import PublicFetch from '../../utils/publicFetch';

const Form = () => {
  const [name, setName] = useState('Jhon');

  const handleSubmit = () => {
    PublicFetch.post('/referentes', {
      tabla: name,
      cod_numerico: 555,
    });
  };

  return (
    <Container>
      <Title>Formulario</Title>
      <form>
        <p>First name:</p>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          ENVIAR
        </button>
      </form>
    </Container>
  );
};

export default Form;
