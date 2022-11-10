import './tags.css'
import { Component } from 'react'
import Data from '../../data/data.json'

export default class Tags extends Component {
  render() {
    return (
      <div>
        {Data &&
          Data.map((data) => {
            return (
              <ul className="listTag" key={data.id}>
                <li className="textTag">{data.tags}</li>
              </ul>
            )
          })}
      </div>
    )
  }
}
