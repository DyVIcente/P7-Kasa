import './footer.css'
import kasa from '../../assets/kasalogo.png'

function Footer() {
  return (
    <footer className="foot">
      <img className="logoFoot" src={kasa} alt="logo kasa" />
      <p className="textFoot">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
