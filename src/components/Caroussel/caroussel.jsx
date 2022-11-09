import { Component } from 'react'
import './caroussel.css'
import Data from '../../data/data.json'

export default class Caroussel extends Component {
  render() {
    return (
      <div>
        {Data &&
          Data.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.pictures[0]} alt="slide"></img>
              </div>
            )
          })}
      </div>
    )
  }
}
