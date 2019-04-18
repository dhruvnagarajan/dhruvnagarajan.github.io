import React, { Component } from 'react'
import './project.css'
import * as data from '../../data/projects.json'

export default class Projects extends Component {
    render() {
      const categories = data.categories
        return (
            <div className="outer">
                {
                  categories.map((category, key) => {
                    return (
                      <div>
                        <div className="h5 l b">{ category.name }</div>
                        {
                          category.projects.map((project, key) => {
                              return <div className="chip">
                                <div className="h5 b">{ project.name }</div>
                                <ul>{
                                  project.responsibilities.map((responsibility, key) => {
                                    return (
                                      <li className="h5 l">{ responsibility }</li>
                                    )
                                  }
                                  )
                                }</ul>
                                <div className="h6 r">{ project.organization }</div>
                              </div>
                            })
                        }
                      </div>
                    )
                  })
                }
            </div>
        );
    }
}