import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './dashboard';
import Display from '../Display/display';

afterEach(cleanup);

describe('Displays the component', () => {
  it('displays dashboard component', () => {
    render(<Dashboard />);
  })
})

// something is very wrong here!!!!
describe('strike key works', () => {
  it('strike key works', () => {
    const props = {strikes: 0}
    const dashboardComp = render(<Dashboard />);
    const displayComp = render(<Display {...props} />)

    dashboardComp.getByText(/strike/i);
    displayComp.getByText(/0/i);

    const button = dashboardComp.getByText(/strike/i);
    fireEvent.click(button);
    // console.log(button);

    const value = displayComp.getByTestId("strikes");
    
    expect(value).toHaveTextContent("0");
  })
})