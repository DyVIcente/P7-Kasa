import { Component } from 'react'
import './logement.css'
//import Data from '../../data/data.json'
//import Caroussel from '../../components/Caroussel/caroussel'
import Dropdown from '../../components/Dropdown/dropDown'
import LogementTitle from '../../components/LogementTitle/logementtitle'
import Tags from '../../components/Tags/tags'
import Stars from '../../components/Stars/stars'
import Host from '../../components/Host/host'

export default class Logement extends Component {
  render() {
    return (
      <div>
        <p>image</p>
        <LogementTitle />
        <Tags />
        <Stars />
        <Host />
        <div className="dropStyle">
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    )
  }
}
