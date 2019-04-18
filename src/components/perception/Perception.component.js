import React, { Component } from 'react'
import * as data from '../../data/perception.json'

export default class PerceptionComponent extends Component {
  render() {
    const perception = data.perception
    return(
      <div className="outer">
        <div className="h3 l b">Perception</div>
        <ul>
          { perception.map((item, key) => <li className="h5 l">{ item }</li>) }
        </ul>
      </div>
    )
  }
}