import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const title = 'Tic Tac Toe';
let wrapped = shallow(<App>{title}</App>);

describe('App', () => {
  it('should render the App Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Titles children', () => { 
    expect(wrapped.find('h1').text()).toEqual(title);
  });
});