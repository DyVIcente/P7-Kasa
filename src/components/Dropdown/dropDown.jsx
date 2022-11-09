import * as React from 'react'
import './dropDown.css'

const Dropdown = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="btn-menu">
      <button className="btn" onClick={handleOpen}>
        <p className="btn-txt">Description</p>
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>
              <p className="menu-item-txt">
                Vous serez à 50m du canal Saint-martin où vous pourrez
                pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                cœur de Paris avec 5 lignes de métro et de nombreux bus.
                Logement parfait pour les voyageurs en solo et les voyageurs
                d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes
                à pied).{' '}
              </p>
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
