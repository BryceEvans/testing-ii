import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './display';
import Dashboard from '../Dashboard/dashboard';

afterEach(cleanup);

describe('Displays the component', () => {
  it('displays display component', () => {
    render(<Display />);
  })
  it('displays dashboard component', () => {
    render(<Dashboard />);
  })
})

describe('displays balls, strikes, fouls, and hits', () => {
  it('displays balls, strikes, fouls, and hits', () => {
    const { getByText } = render(<Display />);

    getByText(/balls/i);
    getByText(/strikes/i);
    getByText(/fouls/i);
    getByText(/hits/i);
  })
})

// something is very wrong here!!!!
describe('strike key works', () => {
  it('strike key works', () => {
    const dashboardComp = render(<Dashboard />);
    const displayCompNum = render(<Display strikes={1}/>)

    dashboardComp.getByText(/strike/i);
    displayCompNum.getByText(/strikes/i);

    const button = dashboardComp.getByText(/strike/i);
    fireEvent.click(button);
    // console.log(button);

    const value = displayCompNum.getByTestId("strikes");
    
    expect(value).toHaveTextContent("0");
  })
})
