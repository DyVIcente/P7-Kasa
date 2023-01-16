import './caroussel.css'
import { useState } from 'react'
import VectorLeft from '../../assets/Vectorleft.png'
import VectorRight from '../../assets/Vectorright.png'

function Caroussel({ pictures }) {
  // utiliser useState crée un état et ca va sauvegarde la valeur qui correspond a l'état dans la premiere clé
  //la second clé donne un callback qu'on pourra appler des qu'on veut modifier l'état
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const goToPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(pictures) || length <= 0) {
    return null
  }

  return (
    <div>
      <div className="carou-container">
        {pictures.map((picture, index) => {
          return (
            <div // si l'index est current alors on mettra picture active sinon picture
              //on change le css selon l'état
              className={index === current ? 'picture active' : 'picture'}
              key={index}
            >
              <img className="carou-img" key={index} src={picture} alt=""></img>
              {/* compteur et compteur2 car sinon erreur console false return pour un element non booleeen */}
              <div className={index === current ? 'compteur' : 'compteur2'}>
                {current + 1}/{pictures.length}
              </div>
            </div>
          )
        })}
        <div>
          <img className="vecR" src={VectorRight} alt="" onClick={goToNext} />
          <img
            className="vecL"
            src={VectorLeft}
            alt=""
            onClick={goToPrevious}
          />
        </div>
      </div>
    </div>
  )
}
export default Caroussel
