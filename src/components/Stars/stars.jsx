import './stars.css'
import { ReactComponent as Star } from '../../assets/Vector.svg'
import { ReactComponent as Star2 } from '../../assets/Vectorgrey.svg'

function Stars({ rating }) {
  const starArray = [1, 2, 3, 4, 5]

  return (
    <div className="stars-container">
      {starArray &&
        starArray.map((item) =>
          rating >= item ? (
            <Star className="stars-orange" key={item}></Star>
          ) : (
            <Star2 className="stars-grey" key={item}></Star2>
          )
        )}
    </div>
  )
}

export default Stars
