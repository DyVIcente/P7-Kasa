import { NavLink } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'

function Header() {
  return (
    <nav className="navBar">
      <img className="logoNav" src={kasa} alt="logo kasa" />
      <nav className="navMenu">
        <NavLink className="navTitle" to="/">
          Accueil
        </NavLink>
        <NavLink className="navTitle" to="/about">
          A propos
        </NavLink>
      </nav>
    </nav>
  )
}

export default Header
