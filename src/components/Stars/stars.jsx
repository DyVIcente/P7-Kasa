import './stars.css'
import { Component } from 'react'
import { ReactComponent as Star } from '../../assets/Vector.svg'

export default class Stars extends Component {
  render() {
    return (
      <div className="stars">
        <Star className="starss"></Star>
        <Star className="starss"></Star>
        <Star className="starss"></Star>
        <Star className="starss"></Star>
        <Star className="starss"></Star>
      </div>
    )
  }
}
