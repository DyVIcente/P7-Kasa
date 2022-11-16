import './logement.css'
import Dropdown from '../../components/Dropdown/dropDown'
import Stars from '../../components/Stars/stars'
import Data from '../../data/data.json'

function Logement() {
  const logementData = Data
  const urlLogement = window.location.pathname
  const logement = logementData.find((item) => item.id === urlLogement)

  return (
    <div>
      <h1>coucuo</h1>
      <Stars />

      <div className="dropStyle">
        <Dropdown title="Équipements" description={logement.equipments} />
        <Dropdown title="Description" description={logement.description} />
      </div>
    </div>
  )
}

export default Logement
