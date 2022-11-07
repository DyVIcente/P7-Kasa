import banniere from '../../assets/banniere.png'
import './banniere.css'

function banniereElem() {
  return (
    <div className="Banner">
      <img className="imgBanner" src={banniere} alt="banniere" />
      <p className="textBanner">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default banniereElem
