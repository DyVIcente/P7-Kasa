import './logementtitle.css'

function LogementTitle({ title, location }) {
  return (
    <div className="tilteetloc">
      <h1 className="title">{title}</h1>
      <h4 className="location">{location}</h4>
    </div>
  )
}

export default LogementTitle
