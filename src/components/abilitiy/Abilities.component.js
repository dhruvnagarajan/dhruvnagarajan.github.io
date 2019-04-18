import React from 'react'
import './abilities.css'
import * as data from '../../data/abilities.json'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class Abilities extends React.Component {
  render() {
    const abilities = data.abilities;
    return <Grid flex>
      <Row center="xs">
      <Col xs={12} sm={12} md={10} lg={8}>
        <div className="h3 b l">Competencies</div>
      </Col>
      </Row>
      <Row center="xs">
      <Col xs={12} sm={12} md={10} lg={8}>
        <div className="chip l">
          <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12}>
            <ul>
              {
                abilities.map((ability, key) => <li className="h5 l">{ ability }</li>)
              }
            </ul>
          </Col>
          </Row>
        </div>
      </Col>
      </Row>
    </Grid>
  }
}