import './card.css'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import Data from '../../data/data.json'

export default class Card extends Component {
  render() {
    return (
      <div>
        {Data &&
          Data.map((data) => {
            return (
              <Link className="cards" to={data.id} key={data.id}>
                <img src={data.cover} alt=""></img>
                <p>{data.title}</p>
              </Link>
            )
          })}
      </div>
    )
  }
}
