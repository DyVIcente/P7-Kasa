import * as React from 'react'
import './dropDown.css'
import Vector from '../../assets/VectorDown.png'

const Dropdown = ({ title, description }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="btn-menu">
      <button className="btn" onClick={handleOpen}>
        <p className="btn-txt">{title}</p>
        <img className="vectorDown" src={Vector} alt=""></img>
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button className="btn-over">
              <p className="menu-item-txt">{description}</p>
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
