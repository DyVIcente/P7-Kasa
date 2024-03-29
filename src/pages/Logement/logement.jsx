import './logement.css'
import Data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import Error from '../Error/error'
import {
  Dropdown,
  Stars,
  LogementTitle,
  Tags,
  Host,
  Caroussel,
} from '../../components/index'

function Logement() {
  // Hook useParams de react-router-dom pour recup l'id dans l'url
  const { id } = useParams()
  // On utilise find pour trouver le premier produit qui repond a la demande egalité de l'id de l'objet et de l'url
  const logemenData = Data.find((product) => product.id === id)
  //return error si l'id ne corrrespond pas
  if (!logemenData) return <Error />
  //décomposition de l'obhet pour créer des variables pour chacunes des props
  const {
    pictures,
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
  } = logemenData

  return (
    <main className="logement-container">
      <Caroussel pictures={pictures} />

      <LogementTitle title={title} location={location} />
      <div className="logement-container_tags-container">
        <Tags tags={tags} />

        <div className="logement-container_stars_host">
          <Stars rating={rating} />
          <Host host={host} />
        </div>
      </div>

      <div className="logement-container_dropDown">
        <Dropdown title="Description" description={description} />
        <Dropdown
          title="Équipements"
          description={
            equipments &&
            equipments.map((equipement, index) => {
              return (
                <ul key={equipement + index}>
                  <li>{equipement}</li>
                </ul>
              )
            })
          }
        />
      </div>
    </main>
  )
}

export default Logement
