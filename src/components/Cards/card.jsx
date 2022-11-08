import './card.css'
/**import { Link } from 'react-router-dom'   yaura un lien sur les cards**/
import { Component } from 'react'
import imgCards from '../../data'

export default class Card extends Component {
  render() {
    return (
      <div>
        <img className="cardImg" src={imgCards} alt="Cards images"></img>
        <p className="titleCard">blabla</p>
      </div>
    )
  }
}
