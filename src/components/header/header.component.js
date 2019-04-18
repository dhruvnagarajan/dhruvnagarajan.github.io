import React from 'react'
import './header.css'
import * as data from '../../data/header.json'

export default class Header extends React.Component {
    render() {
        return (
            <div className="outer">
                <span className="h2 b">{ data.name }</span>
                <br></br>
                <span className="h5">{ data.title }</span>
            </div>
        );
    }
}