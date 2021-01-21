import React from 'react';
import { shallow } from 'enzyme';
import GameBoard from '../components/WebBoard';
import Board from '../lib/Board';

const board = new Board();

describe('<Board/>', () => {
 
  it('renders the Board grid rows', () => {
    const wrapper = shallow(<GameBoard board={board} />);
    expect(wrapper.find('.row').getElements().length).toEqual(3);
  });
  
  it('renders the Board cells with no contents in cell', () => {
  
    const wrapper = shallow(<GameBoard board={board} />);
  
    expect(
      wrapper.find('.row').forEach((row) => {
        row.children().forEach((cell) => {
          expect(cell.text()).toEqual('');
        });
      })
    );
  });
 });