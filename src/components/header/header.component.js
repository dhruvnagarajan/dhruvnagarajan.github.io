import React from 'react'
import './header.css'
import * as data from './header.json'

export default class Header extends React.Component {
    render() {
        return (
            <div className="outer">
                <span className="h1 bold">{ data.name }</span>
                <br></br>
                <span className="h3">{ data.title }</span>
            </div>
        );
    }
}