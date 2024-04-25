import React, { useEffect, useState } from 'react';
import ListaPersonajes from './Personajes/ListaPersonajes';

const App = () => {
  // Estado para almacenar los datos de los personajes
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // Fetch de la API de Rick and Morty
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json()) // Parsea la respuesta a JSON
      .then(data => {
        console.log(data.results); // Muestra los datos de los personajes en la consola
        setPersonajes(data.results); // Almacena los datos de los personajes en el estado
      })
      .catch(error => console.error('Error fetching data:', error)); // Maneja errores de solicitud
  }, []); // Ejecuta solo una vez al montar el componente

  // Renderiza el componente ListaPersonajes, pasando los datos de los personajes como una propiedad
  return (
    <div>
      <h1>Lista de Personajes de Rick and Morty</h1>
      <ListaPersonajes personajes={personajes} />
    </div>
  );
};

export default App;
