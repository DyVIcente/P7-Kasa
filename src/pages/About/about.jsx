import './about.css'
import Dropdown from '../../components/Dropdown/dropDown'
import DataAbout from '../../data/dataAbout.json'

function About() {
  return (
    <main className="aboutMain">
      <div className="bannerAbout"></div>
      {DataAbout &&
        DataAbout.map((databout) => {
          return (
            <div key={databout.id} className="dropDiv">
              <Dropdown
                title={databout.title}
                description={databout.description}
              />
            </div>
          )
        })}
    </main>
  )
}

export default About
