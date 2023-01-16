import { NavLink } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'

function Header() {
  return (
    <nav className="navBar-container">
      <img className="navBar-logo" src={kasa} alt="logo_kasa" />
      <nav className="navBar-menu">
        <NavLink
          className={(Navlink) => (Navlink.isActive ? 'active' : null)}
          to="/"
        >
          Accueil
        </NavLink>
        {/* NavLink prend la place d'activeClassName */}
        <NavLink
          className={(Navlink) => (Navlink.isActive ? 'active' : null)}
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </nav>
  )
}

export default Header
