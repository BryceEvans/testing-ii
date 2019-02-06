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
      if (this.state.strikes < 2) {
        let strikes = this.state.strikes;
        console.log({ strikes });
        this.setState({ strikes: this.state.strikes + 1 });
      } else {
        let strikes = this.state.strikes;
        console.log({ strikes });
        this.setState({ strikes: 0, balls: 0, fouls: 0 });
      }
    }

    incrementBall = () => {
      if (this.state.balls < 3) {
        let balls = this.state.balls;
        console.log({ balls });
        this.setState({ balls: this.state.balls + 1 });
      } else {
        let balls = this.state.balls;
        console.log({ balls });
        this.setState({ strikes: 0, balls: 0, fouls: 0 });
      }
    }

    incrementFoul = () => {
      if (this.state.strikes < 2) {
        this.setState({ strikes: this.state.strikes + 1, fouls: this.state.fouls + 1 });
      } else if (this.state.strikes === 2) {
          this.setState({ strikes: this.state.strikes, fouls: this.state.fouls + 1 });
      }
    }

    incrementHit = () => {
      this.setState({ hits: this.state.hits + 1, strikes: 0, fouls: 0, balls: 0 })
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
          <div className='current-count'>
            <h1 data-testid="strikes">Strikes: {this.state.strikes}</h1>
            <h1>Balls: {this.state.balls}</h1>
            <h1>Fouls: {this.state.fouls}</h1>
            <h1>Hits: {this.state.hits}</h1>
          </div>
        </div>
      )
    }
};

export default Display;