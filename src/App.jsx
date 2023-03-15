import React, { useState } from 'react';
import Modal from 'react-modal';

function App() {
  const [nombre, setNombre] = useState('');
  const [semestre, setSemestre] = useState('');
  const [deporteFavorito, setDeporteFavorito] = useState('');
  const [equiposDeporte, setEquiposDeporte] = useState([]);
  const [descripcionEquipo, setDescripcionEquipo] = useState('');
  const [jugadoresEstelares, setJugadoresEstelares] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const deportes = [
    'Fútbol',
    'Baloncesto',
    'Tenis',
    'Voleibol',
    'Natación'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí se podría enviar la información a una API o hacer algo con ella
  };

  return (
    <div className="App">
      <div className='container'>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre" style={{ margin: 10 }}>Nombre del estudiante</label>
          <input name='nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

          <label htmlFor="semestre" style={{ margin: 10 }}>Semestre del estudiante</label>
          <input name='semestre' type="text" value={semestre} onChange={(e) => setSemestre(e.target.value)} required />

          <label htmlFor="deporteFavorito" style={{ margin: 10 }}>Deporte favorito</label>
          <select name='deporteFavorito' value={deporteFavorito} onChange={(e) => setDeporteFavorito(e.target.value)} required>
            <option value="">Seleccione un deporte</option>
            {deportes.map((deporte, index) => (
              <option key={index} value={deporte}>{deporte}</option>
            ))}
          </select>
          <label htmlFor="equiposDeporte" style={{ margin: 10 }}>Equipos de {deporteFavorito}</label>
          <input name='equiposDeporte' type="text" value={equiposDeporte} onChange={(e) => setEquiposDeporte(e.target.value)} required />

          <label htmlFor="descripcionEquipo" style={{ margin: 10 }}>Descripción del equipo de {deporteFavorito}</label>
          <input name='descripcionEquipo' type="text" value={descripcionEquipo} onChange={(e) => setDescripcionEquipo(e.target.value)} required />

          <label htmlFor="jugadoresEstelares" style={{ margin: 10 }}>Jugadores estelares de {equiposDeporte}</label>
          <input name='jugadoresEstelares' type="text" value={jugadoresEstelares} onChange={(e) => setJugadoresEstelares(e.target.value)} required />

          <button onClick={openModal}>Enviar</button>

        </form>
      </div>
    </div>
  );
}

export default App;