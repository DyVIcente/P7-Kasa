import { Link } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'

function Header() {
  return (
    <nav className="navBar">
      <img className="logoNav" src={kasa} alt="logo kasa" />
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  )
}

export default Header
