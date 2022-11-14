import './card.css'
import { Link } from 'react-router-dom'
import Data from '../../data/data.json'

function Card() {
  return (
    <div className="losCardos">
      {Data &&
        Data.map((data) => {
          return (
            <Link className="cards" to={'logement/' + data.id} key={data.id}>
              <img className="imgCards" src={data.cover} alt=""></img>
              <p className="titleCards">{data.title}</p>
            </Link>
          )
        })}
    </div>
  )
}

export default Card
