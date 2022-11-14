import './logement.css'
import data from '../../data/data.json'
//import Caroussel from '../../components/Caroussel/caroussel'
import Dropdown from '../../components/Dropdown/dropDown'
import LogementTitle from '../../components/LogementTitle/logementtitle'
import Tags from '../../components/Tags/tags'
import Stars from '../../components/Stars/stars'
//import Host from '../../components/Host/host'
import { useParams } from 'react-router-dom'

const Logement = () => {
  const { productId } = useParams()
  const prod = data.find((product) => product.id === productId)
  const { title, location, rating, host, equipments, description, pictures } =
    prod

  return (
    <div>
      <img src="" alt=""></img>
      <LogementTitle title={title} location={location} />

      <Stars />

      <div className="dropStyle">
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  )
}

export default Logement
