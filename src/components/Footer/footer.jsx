import './footer.css'
import kasa from '../../assets/kasalogo.png'

function Footer() {
  return (
    <div className="foot">
      <img className="logoFoot" src={kasa} alt="logo kasa" />
      <p className="textFoot">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
