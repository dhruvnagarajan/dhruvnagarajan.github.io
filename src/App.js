import React from 'react'
import './css/App.css'
import Header from './components/header/header.component'
import KnGraph from './components/kngraph/kngraph.component'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <KnGraph />
      </div>
    );
  }
}