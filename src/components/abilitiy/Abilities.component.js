import React from 'react'
import './abilities.css'
import * as data from '../../data/abilities.json'

export default class Abilities extends React.Component {
    render() {
        const abilities = data.abilities;
        return (
            <div className="outer">
            <div className="h3 b l">Abilities</div>
              <div className="chipContainer l">
                <ul>
                {
                  abilities.map((ability, key) => {
                    return <li className="h5 l">{ ability }</li>
                  })
                }
                </ul>
              </div>
            </div>
        )
    }
}