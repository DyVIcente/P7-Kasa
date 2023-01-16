import './about.css'
import Dropdown from '../../components/Dropdown/dropDown'
import DataAbout from '../../data/dataAbout.json'

function About() {
  return (
    <main className="about-container">
      <div className="about-container_banner"></div>
      {DataAbout &&
        DataAbout.map((databout) => {
          return (
            <div key={databout.id} className="about-dropDown">
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
