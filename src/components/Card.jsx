import React from 'react'

const Card = ({ nombre, escritor }) => {

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>Hola! {nombre}</h2>
      <p><strong>Sabemos que tu escritor Favorito es:</strong> {escritor}</p>
    </div>
  )
}

export default Card



