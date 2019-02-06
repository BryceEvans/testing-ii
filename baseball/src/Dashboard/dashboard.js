import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <div>
        <h1>Batter Simulation</h1>
      </div>
      <div className='pitch-options'>
      <button onClick={props.strike}><h1>Strike</h1></button>
        <button onClick={props.ball}><h1>Ball</h1></button>
        <button onClick={props.foul}><h1>Foul</h1></button>
        <button onClick={props.hit}><h1>Hit</h1></button>
      </div>
    </div>
  )
};

export default Dashboard;