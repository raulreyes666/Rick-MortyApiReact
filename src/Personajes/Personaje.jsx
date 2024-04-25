import React from 'react';

const Personaje = ({ id, name, status, image }) => {
  // Renderiza los detalles de un personaje
  return (
    <div id='personajs'>
      <h2>{name}</h2>
      <p>{status}</p> {/* Muestra el estado del personaje */}
      <img src={image} alt={name} /> {/* Muestra la imagen del personaje */}
    </div>
  );
};

export default Personaje;

