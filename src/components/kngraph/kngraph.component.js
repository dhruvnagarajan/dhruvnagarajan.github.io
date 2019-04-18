import React from 'react'
import './kngraph.css'
import * as data from '../../data/kngraph.json'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class KnGraph extends React.Component {
    render() {
        const feature = data.kngraph;
        return <Grid fluid>
            <Row center="xs">
                {
                    feature.map((item, key) =>
                        <div className="h5 chip-black">{ item.title }</div>
                    )
                }
            </Row>
        </Grid>
    }
}