import React from 'react';
import Dashboard from '../Dashboard/dashboard';

class Display extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0,
      }
    }

    incrementStrike = () => {
      console.log('Strike pitched!')
      let strikes = this.state.strikes + 1;
      this.setState({ strikes });
      console.log({ strikes });
    }

    incrementBall = () => {
      console.log('Ball pitched!')
      let balls = this.state.balls + 1;
      this.setState({ balls });
      console.log({ balls });
    }

    incrementFoul = () => {
      console.log('Foul pitched!')
      let fouls = this.state.fouls + 1;
      this.setState({ fouls });
      console.log({ fouls });
    }

    incrementHit = () => {
      console.log('Strike pitched!')
      let hits = this.state.hits + 1;
      this.setState({ hits });
      console.log({ hits });
    }

    render() {
      return (
        <div>
          <Dashboard 
          strike={this.incrementStrike}
          ball={this.incrementBall}
          foul={this.incrementFoul}
          hit={this.incrementHit}
          />
          <div>
            Strikes: {this.state.strikes}
            Balls: {this.state.balls}
            Fouls: {this.state.fouls}
            Hits: {this.state.hits}
          </div>
        </div>
      )
    }
};

export default Display;