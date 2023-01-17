import * as React from 'react'
import './dropDown.css'
import Vector from '../../assets/VectorDown.png'
import VectorUp from '../../assets/Vectorup.png'
import { useState } from 'react'

function Dropdown({ title, description }) {
  // destructuration, on recupere la valeur d'open et celle qui permet de la changer setOpen ici
  // on démare avec la valeur false ( 0 souvent avec un tableau double valeur)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open) // on lui passe la nouvelle valeur de l'état, inverse la valeur actuelle de open
  } // du coup on passe handleOpen dans onClick, si false passe true et inverse

  return (
    <div className="drop-container">
      <button className="drop-btn" onClick={handleOpen}>
        <p className="drop-btn_text">{title}</p>
        {open ? (
          <img className="vectorUp" src={VectorUp} alt="vector_up" />
        ) : (
          <img className="vectorDown" src={Vector} alt="vector_down" />
        )}
      </button>
      {open ? (
        <ul className="drop-container_text">
          <li className="drop-container_text-list">
            <span className="drop-container_text-description">
              {description}
            </span>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
