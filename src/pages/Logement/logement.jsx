import { Component } from 'react'
import './logement.css'
//import Data from '../../data/data.json'
//import Caroussel from '../../components/Caroussel/caroussel'
import Dropdown from '../../components/Dropdown/dropDown'
import LogementTitle from '../../components/LogementTitle/logementtitle'

export default class Logement extends Component {
  render() {
    return (
      <div>
        <LogementTitle />
        <div className="dropStyle">
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    )
  }
}
