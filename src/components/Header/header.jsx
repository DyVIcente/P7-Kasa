import { Link } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'

function Header() {
  return (
    <nav className="navBar">
      <img className="logoNav" src={kasa} alt="logo kasa" />
      <div className="navMenu">
        <Link className="navTitle" to="/">
          Accueil
        </Link>
        <Link className="navTitle" to="/about">
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
