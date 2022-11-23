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
    setOpen(!open) // on lui passe la nouvelle valeur de l'état
  } // du coup on passe handleOpen dans onClick

  return (
    <div className="btn-menu">
      <button className="btn" onClick={handleOpen}>
        <p className="btn-txt">{title}</p>
        {open ? (
          <img className="vectorUp" src={VectorUp} alt=""></img>
        ) : (
          <img className="vectorDown" src={Vector} alt=""></img>
        )}
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <span className="menu-item-txt">{description}</span>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
