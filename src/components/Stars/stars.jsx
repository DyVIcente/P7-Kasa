import './stars.css'
import { ReactComponent as Star } from '../../assets/Vector.svg'
import { ReactComponent as Star2 } from '../../assets/Vectorgrey.svg'

function Stars({ rating }) {
  // init le tableau pour dire qu'il y aura 5 élém dans map
  const starArray = [1, 2, 3, 4, 5]

  return (
    <div className="stars-container">
      {starArray &&
        starArray.map((item, index) =>
          rating >= item ? (
            <Star className="stars-orange" key={item + index}></Star>
          ) : (
            <Star2 className="stars-grey" key={item + index}></Star2>
          )
        )}
    </div>
  )
}

export default Stars
