import './tags.css'

function Tags({ tags }) {
  return (
    <div>
      {tags &&
        tags.map((tag) => {
          return (
            <span className="textTag" key={tag}>
              {tag}
            </span>
          )
        })}
    </div>
  )
}

export default Tags
