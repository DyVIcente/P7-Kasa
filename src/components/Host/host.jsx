import './host.css'

function Host({ host }) {
  return (
    <div className="hostBlock">
      <p className="hostName">{host.name}</p>
      <img className="hostPicture" src={host.picture} alt=""></img>
    </div>
  )
}

export default Host
