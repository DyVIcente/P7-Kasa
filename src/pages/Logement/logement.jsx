import './logement.css'
import Dropdown from '../../components/Dropdown/dropDown'
import Stars from '../../components/Stars/stars'
import Data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import Logementtitle from '../../components/LogementTitle/logementtitle.jsx'
import Tags from '../../components/Tags/tags'
import Host from '../../components/Host/host.jsx'

function Logement() {
  // Hook useParams pour recup l'id dans l'url
  const { id } = useParams()
  // On utilise find pour trouver le premier produit qui repond a la demande
  const logemenData = Data.find((product) => product.id === id)

  const { title, location, tags, host, rating, description, equipments } =
    logemenData

  return (
    <div>
      <p>image slider</p>
      <Logementtitle title={title} location={location} />
      <Tags tags={tags} />
      <div className="starHost">
        <Stars />
        <Host host={host} />
      </div>
      <div className="dropStyle">
        <Dropdown title="Description" description={description} />
        <Dropdown title="Équipements" description={equipments} />
      </div>
    </div>
  )
}

export default Logement
