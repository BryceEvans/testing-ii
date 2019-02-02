import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
      // state = {
      //   balls: 0,
      //   strikes: 0
      // }
    }

    strike = () => {
      console.log('Strike pitched!')
    }

    ball = () => {
      console.log('Ball pitched!')
    }

    foul = () => {
      console.log('Foul hit!')
    }

    hit = () => {
      console.log('Hit!')
    }

    render() {
      return (
        <div>
          <button onClick={this.strike}>Stirke</button>
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.foul}>Foul</button>
          <button onClick={this.hit}>Hit</button>
        </div>
      )
    }
};

export default Dashboard;