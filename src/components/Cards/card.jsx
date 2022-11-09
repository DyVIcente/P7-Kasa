import './card.css'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import Data from '../../data/data.json'

export default class Card extends Component {
  render() {
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
}
