import React from 'react'
import Modal from 'react-modal';

const ModalQuestion = ({ modalIsOpen, nombre, semestre, deporteFavorito, equiposDeporte, jugadoresEstelares,setModalIsOpen }) => {
    return (
        <Modal isOpen={modalIsOpen}>
            <h2>Datos ingresados:</h2>
            <p>Nombre: {nombre}</p>
            <p>Semestre: {semestre}</p>
            <p>Deporte favorito: {deporteFavorito}</p>
            <p>Equipo: {equiposDeporte}</p>
            <p>Jugadores estelares: {jugadoresEstelares}</p>
            <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
        </Modal>
    )
}

export default ModalQuestion