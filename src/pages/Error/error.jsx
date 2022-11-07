import './error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1 className="titleError">404</h1>
      <p className="textError">Oups! La page que vous demandez n'existe pas.</p>
      <div className="linkBackAccueil">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
