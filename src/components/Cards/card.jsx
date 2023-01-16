import './card.css'
import { NavLink } from 'react-router-dom'
import CardDatas from '../../data/data.json'

function Card() {
  return (
    <div className="losCardos">
      {CardDatas &&
        CardDatas.map((carddata) => {
          return (
            <NavLink
              className="cards"
              to={`logement/${carddata.id}`}
              key={carddata.id}
            >
              <img className="imgCards" src={carddata.cover} alt=""></img>
              <p className="titleCards">{carddata.title}</p>
            </NavLink>
          )
        })}
    </div>
  )
}

export default Card
