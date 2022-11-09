import { Component } from 'react'
import './logement.css'
//import Data from '../../data/data.json'
//import Caroussel from '../../components/Caroussel/caroussel'
import Dropdown from '../../components/Dropdown/dropDown'

export default class Logement extends Component {
  render() {
    return (
      <div>
        <h1>logement 🧮</h1>

        <Dropdown />
      </div>
    )
  }
}
