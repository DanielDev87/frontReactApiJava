/* eslint-disable react/prop-types */
import { useState } from 'react';

function UserForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, email });
    setNombre('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} required />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default UserForm;
