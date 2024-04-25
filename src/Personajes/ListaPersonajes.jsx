import React from 'react';
import Personaje from './Personaje';
import './styleLista.css'

const ListaPersonajes = ({ personajes }) => {
  // Renderiza la lista de personajes
  return (
    <div id='cubos'>
      {/* Itera sobre la lista de personajes y renderiza un componente Personaje para cada uno */}
      {personajes.map(personaje => (
        <Personaje
          key={personaje.id}
          id={personaje.id}
          name={personaje.name}
          status={personaje.status}
          image={personaje.image}
        />
      ))}
    </div>
  );
};

export default ListaPersonajes;
