import './tags.css'
import Data from '../../data/data.json'

function Tags() {
  return (
    <div>
      {Data &&
        Data.map((data) => {
          return (
            <ul className="listTag" key={data.id}>
              <li className="textTag">{data.tags}</li>
            </ul>
          )
        })}
    </div>
  )
}

export default Tags
