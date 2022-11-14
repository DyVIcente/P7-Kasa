import './caroussel.css'
import Data from '../../data/data.json'

function Caroussel() {
  return (
    <div>
      {Data &&
        Data.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.pictures[0]} alt="slide"></img>
            </div>
          )
        })}
    </div>
  )
}

export default Caroussel
