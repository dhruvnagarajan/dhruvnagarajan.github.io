import React from 'react'
import './css/App.css'
import Header from './components/header/header.component'
import Projects from './components/projects/projects.component'
import KnGraph from './components/kngraph/kngraph.component'
import Abilities from './components/abilitiy/Abilities.component'
import FooterComponent from './components/footer/Footer.component'

export default class App extends React.Component {
  render() {
    return (
      <div className="App pdfView" id="pdfView">
        <Header />
        <Abilities />
        <Projects />
        <KnGraph />
        <FooterComponent />
      </div>
    );
  }
}