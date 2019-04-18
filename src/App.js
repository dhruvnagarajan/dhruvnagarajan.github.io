import React from 'react';
import './App.css';
import Profile from './components/profile/profile.component';
import KnGraph from './components/skills/kngraph/kngraph.component';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <KnGraph />
      </div>
    );
  }
}