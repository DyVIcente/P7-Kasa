import './logementtitle.css'

function LogementTitle(props) {
  return (
    <div className="tilteetloc">
      <h1 className="title">{props.user.title}</h1>
      <h4 className="location">{props.user.location}</h4>
    </div>
  )
}

export default LogementTitle

//<h1 className="title">{this.props.title}</h1>
//<h4 className="location">{this.props.location}</h4>
