import './about.css'
import Dropdown from '../../components/Dropdown/dropDown'
import DataAbout from '../../data/dataAbout.json'

function About() {
  return (
    <div className="aboutMain">
      <div className="bannerAbout"></div>
      {DataAbout &&
        DataAbout.map((data) => {
          return (
            <div className="dropDiv">
              <Dropdown
                key={data.id}
                title={data.title}
                description={data.description}
              />
            </div>
          )
        })}
    </div>
  )
}

export default About
