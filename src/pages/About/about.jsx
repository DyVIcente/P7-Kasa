import './about.css'
import Dropdown from '../../components/Dropdown/dropDown'
import DataAbout from '../../data/dataAbout.json'

function About() {
  return (
    <main className="aboutMain">
      <div className="bannerAbout"></div>
      {DataAbout &&
        DataAbout.map((data) => {
          return (
            <div key={data.id} className="dropDiv">
              <Dropdown title={data.title} description={data.description} />
            </div>
          )
        })}
    </main>
  )
}

export default About
