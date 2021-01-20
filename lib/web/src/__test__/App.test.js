import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
 
const title = 'Tic Tac Toe';
let wrapped = shallow(<App>{title}</App>);
 
describe('App', () => {
 it('renders the App children', () => {
   expect(wrapped.find('h1').text()).toEqual(title);
 });
});
