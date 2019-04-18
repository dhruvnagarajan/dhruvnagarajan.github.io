import React, { Component } from 'react'
import './project.css'
import * as data from '../../data/projects.json'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class Projects extends Component {
  render() {
    const categories = data.categories
    return (
      <Grid flex>
        <Row center="xs">
          <Col xs={12} sm={12} md={10} lg={8}>
            <div className="h3 b l">Projects</div>
          </Col>
        </Row>
        {
          categories.map((category, key) => <Category category={category} />)
        }
      </Grid>
    );

    function Category(props) {
      return <div>
        <Row center="xs">
        <Col xs={12} sm={12} md={10} lg={8}>
          <div className="h5 l b">{ props.category.name }</div>
        </Col>
        </Row>
          {
            props.category.projects.map((project, key) => <Project project={project} />)
          }
      </div>
    }

    function Project(props) {
      return <div>
        <Row center="xs">
        <Col xs={12} sm={12} md={10} lg={8}>
          <div className="chip">
            <Row center="xs">
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="h5 b">{ props.project.name }</div>
            </Col>
            </Row>
            <Row center="xs">
            <Col xs={12} sm={12} md={12} lg={12}>
              <ul>
                {
                  props.project.responsibilities.map((responsibility, key) =>
                    <li className="h5 l">
                      { responsibility }
                    </li>
                  )
                }
              </ul>
            </Col>
            </Row>
            <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="h6 r">{ props.project.organization }</div>
            </Col>
            </Row>
          </div>
        </Col>
        </Row>
      </div>
    }
  }
}