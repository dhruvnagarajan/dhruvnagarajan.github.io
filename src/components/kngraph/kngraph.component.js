import React from 'react'
import './kngraph.css'
import * as data from './feature.json'

export default class KnGraph extends React.Component {
    render() {
        return (
            <div className="outer">
                <span className="chip">{ data.feature[0]["title"] }</span>
            </div>
        )
    }
}