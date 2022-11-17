import './caroussel.css'
import { useState } from 'react'
import VectorLeft from '../../assets/Vectorleft.png'
import VectorRight from '../../assets/Vectorright.png'

function Caroussel({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const goToPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null
  }

  return (
    <div>
      <div>
        <img className="vecR" src={VectorRight} alt="" onClick={goToNext} />
        <img className="vecL" src={VectorLeft} alt="" onClick={goToPrevious} />
      </div>
      <div className="carou">
        {pictures.map((picture, index) => {
          return (
            <div
              className={index === current ? 'picture active' : 'picture'}
              key={index}
            >
              <img className="carouImg" key={index} src={picture} alt=""></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Caroussel
