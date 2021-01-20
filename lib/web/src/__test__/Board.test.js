import React from 'react';
import { shallow } from 'enzyme';
import Board from '../components/Board';

describe('<Board/>', () => {
 
  it('renders the Board grid rows', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.row').getElements().length).toEqual(3);
  });
  
  it('renders the Board cells with no contents in cell', () => {
    const wrapper = shallow(<Board />);
  
    expect(
      wrapper.find('.row').forEach((row) => {
        row.children().forEach((cell) => {
          expect(cell.text()).toEqual('');
        });
      })
    );
  });
 });
 