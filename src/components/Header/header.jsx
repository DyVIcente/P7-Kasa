import { Link } from 'react-router-dom'
import kasa from '../../assets/kasalogo.png'
import './header.css'
import { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navBar">
        <img src={kasa} alt="logo kasa" />
        <Link to="/">Accueil</Link>
        <Link to="/survey">A propos</Link>
      </nav>
    )
  }
}
