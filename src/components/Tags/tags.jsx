import './tags.css'

function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags &&
        tags.map((tag) => {
          return (
            <span className="tag-text" key={tag}>
              {tag}
            </span>
          )
        })}
    </div>
  )
}

export default Tags
