import './footer.css'
import kasa from '../../assets/kasalogo.png'
import { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="foot">
        <img className="logoFoot" src={kasa} alt="logo kasa" />
        <p className="textFoot">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}
