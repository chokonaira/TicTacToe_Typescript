import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
 
let wrapped = shallow(<App></App>);
 
describe('App', () => {
 it('renders the App children hi', () => {
   expect(wrapped.find('h1').text()).toEqual('Tic Tac Toe');
 });
});

