import React, { Component } from 'react';

import Dashboard from './Dashboard/dashboard';
import Display from './Display/display';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Display />
      </div>
    );
  }
}

export default App;
