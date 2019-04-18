import React from 'react'
import './kngraph.css'
import * as data from './feature.json'

export default class KnGraph extends React.Component {
    render() {
        const feature = data.feature;
        return (
            <div className="outer">
                <ul>
                {
                    feature.map((item, key) => {
                        return <span className="chip">{ item.title }</span>
                    })
                }
                </ul>
            </div>
        )
    }
}