import './host.css'
//import { Component } from 'react'
import Data from '../../data/data.json'

function Host() {
  return (
    <div className="app">
      {Data &&
        Data.map((record) => {
          return (
            <div className="box" key={record.id}>
              {record.title}

              {record.host &&
                record.host.map((data) => {
                  return (
                    <div key={record.id}>
                      <p> {data.name} </p>
                      <img src={data.picture} alt="host"></img>
                    </div>
                  )
                })}
            </div>
          )
        })}
    </div>
  )
}

export default Host
