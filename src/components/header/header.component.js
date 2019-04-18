import React from 'react'
import './header.css'
import * as data from '../../data/header.json'
import { Tabs, Tab, Jumbotron } from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return (
            <div className="outer">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab>
                    <span className="h2 b">{ data.name }</span>
                </Tab>
                <Tab>
                    <span className="h5">{ data.title }</span>
                </Tab>
            </Tabs>
            </div>
        )
    }
}