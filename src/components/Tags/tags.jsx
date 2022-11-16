import './tags.css'

function Tags({ tags }) {
  return (
    <div>
      <ul className="listTag">
        <li className="textTag">{tags}</li>
      </ul>
    </div>
  )
}

export default Tags
