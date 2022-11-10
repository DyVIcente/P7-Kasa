import { Component } from 'react'
import './banniere.css'

export default class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <p className="textBanner">
          Chez vous,
          <br /> partout et ailleurs
        </p>
      </div>
    )
  }
}
