import React from 'react'
import './kngraph.css'
import * as data from '../../data/kngraph.json'

export default class KnGraph extends React.Component {
    render() {
        const feature = data.kngraph;
        return (
            <div className="outer">
                <div className="chipContainer">
                    <ul>
                    {
                        feature.map((item, key) => {
                            return <span className="h5 chip-black">{ item.title }</span>
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}