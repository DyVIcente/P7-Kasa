import './footer.css'
import kasa from '../../assets/kasalogo.png'

function Footer() {
  return (
    <footer className="footer-container">
      <img className="footer-img" src={kasa} alt="logo_kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
