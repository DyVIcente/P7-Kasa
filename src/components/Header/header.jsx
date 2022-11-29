import { NavLink } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'

function Header() {
  return (
    <nav className="navBar">
      <img className="logoNav" src={kasa} alt="logo kasa" />
      <nav className="navMenu">
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
          A propos
        </NavLink>
      </nav>
    </nav>
  )
}

export default Header
