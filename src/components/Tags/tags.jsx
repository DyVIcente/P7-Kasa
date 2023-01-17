import './tags.css'

function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags &&
        tags.map((tag, index) => {
          return (
            <span className="tag-text" key={tag + index}>
              {tag}
            </span>
          )
        })}
    </div>
  )
}

export default Tags
