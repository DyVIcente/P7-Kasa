import './logement.css'
//import data from '../../data/data.json'
//import Caroussel from '../../components/Caroussel/caroussel'
import Dropdown from '../../components/Dropdown/dropDown'
import LogementTitle from '../../components/LogementTitle/logementtitle'
//import Tags from '../../components/Tags/tags'
import Stars from '../../components/Stars/stars'
//import Host from '../../components/Host/host'
//import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Logement() {
  useEffect(() => {
    fetch(`../../data.data.json`).then((response) =>
      response
        .json()
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    )
  }, [])

  const [title, location] = useState({})
  return (
    <div>
      {/*<img src="" alt=""></img>*/}
      <LogementTitle title={title} location={location} />
      <h1>cocuu</h1>
      <Stars />

      <div className="dropStyle">
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  )
}

export default Logement
