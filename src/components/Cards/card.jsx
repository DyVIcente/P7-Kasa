import './card.css'
import { NavLink } from 'react-router-dom'
import Data from '../../data/data.json'

function Card() {
  return (
    <div className="losCardos">
      {Data &&
        Data.map((data) => {
          return (
            <NavLink className="cards" to={`logement/${data.id}`} key={data.id}>
              <img className="imgCards" src={data.cover} alt=""></img>
              <p className="titleCards">{data.title}</p>
            </NavLink>
          )
        })}
    </div>
  )
}

export default Card
