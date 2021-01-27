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
  it('renders the Board grid rows', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    expect(wrapper.find('.row').getElements().length).toEqual(3);
  });

  it('renders the Board with 9 cells', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    expect(wrapper.find(Cell)).toHaveLength(9);
  });

  it('renders the Board with 9 cells with Default values', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    wrapper.find('.row').forEach((cell: any) => {
      cell.children().forEach((node: any) => {
        expect(node.props().cellValue).toEqual('');
      });
    });
  });

  it('renders the Board cell with a move on the first cell', () => {
    const wrapper = shallow(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    const result = wrapper.find('.cell').at(0).simulate('click');
    expect(result.props()).toEqual('hello')
    // expect(wrapper.find(Foo).at(0).props().foo).to.equal('bar');

    // wrapper.find('.row').forEach((cell: any) => {
    //   cell.forEach((node: any) => {
    //     expect(node.get(0)).toEqual('');
    //   });
    // });

  });
  //   wrapper.find(Cell).forEach((cell: any) => {
  //     console.log(cell, 'cell')
  //     expect(cell.at(0)).toEqual('X')
  //     // cell.children().forEach((index: any) => {
  //     //   expect(index.text()).toEqual('');
  //     // });
  //   });
  // });
});

// <Cell
// disabled={disabled}
//  className={className}
//  onClick={onClick}
//  cellValue={defaultCellValue}
///>; 