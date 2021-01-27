import React from 'react';
import { shallow } from 'enzyme';
import WebBoard from '../components/WebBoard';
import Board from '../lib/Board';
import Cell from '../components/Cell';

const board = new Board();
const setBoard = jest.fn();
const gameStatus = jest.fn();
// const disabled = false;
// const className = 'cell';
// const onClick = jest.fn();
// const defaultCellValue = '';

describe('<Board/>', () => {
  xit('renders the Board grid rows', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    expect(wrapper.find('.row').getElements().length).toEqual(3);
  });

  xit('renders the Board with 9 cells', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    expect(wrapper.find(Cell)).toHaveLength(9);
  });

  xit('renders the Board with 9 cells with Default values', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    wrapper.find('.row').forEach((row: any) => {
      row.children().forEach((cell: any) => {
        expect(cell.prop('cellValue')).toEqual('');
      });
    });
  });

  xit('renders the Board cell with a move on the first cell', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    wrapper.find(Cell).at(0).simulate('click');
    expect(wrapper.find(Cell).at(0).length).toEqual(1);
    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X')
  });

  xit('renders the Board cell with a move on the 2nd cell', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    wrapper.find(Cell).at(1).simulate('click');
    expect(wrapper.find(Cell).at(1).length).toEqual(1);
    expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('X')
  });

  it('renders the Board cell with win on first row', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    // wrapper.find(Cell).at(0).simulate('click');
    // wrapper.find(Cell).at(1).simulate('click');
    // wrapper.find(Cell).at(2).simulate('click');
    // expect(wrapper.find(Cell).at(1).length).toEqual(1);
    // expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('X')
    wrapper.find('.row').forEach((row: any) => {
      row.children(0).forEach((cell: any) => {
        
        console.log(cell.props())
        expect(cell).toEqual(3);
      });
    });
  });
});

// <Cell
// disabled={disabled}
//  className={className}
//  onClick={onClick}
//  cellValue={defaultCellValue}
///>; 