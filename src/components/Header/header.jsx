import { NavLink } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'

function Header() {
  return (
    <nav className="navBar-container">
      <img className="navBar-logo" src={kasa} alt="logo_kasa" />
      <nav className="navBar-menu">
        <NavLink activeclassname="active" to="/">
          Accueil
        </NavLink>
        <NavLink activeclassname="active" to="/about">
          A Propos
        </NavLink>
      </nav>
    </nav>
  )
}

export default Header
