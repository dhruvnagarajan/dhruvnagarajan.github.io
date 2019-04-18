import React from 'react'
import './header.css'
import * as data from '../../data/header.json'
import { Tabs, Tab, Jumbotron } from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        var style = {
            "background-color": "#999"
        }
        return (
            <div className="outer">
            <Jumbotron style={style}>HEY!</Jumbotron>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab>
                        <span className="h2 b">{ data.name }</span>
                    </Tab>
                    <Tab>
                        <span className="h5">{ data.title }</span>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}