import React from 'react';
import { shallow, mount } from 'enzyme';
import WebBoard from '../components/WebBoard';
import App from '../App';
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
    const wrapper = mount(
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    );
    wrapper.find('.row').forEach((row: any) => {
      row.children().forEach((cell: any) => {
        expect(cell.prop('cellValue')).toEqual('');
      });
    });
  });

  it('renders the Board cell with a move on the first cell', () => {
    const wrapper = mount(<App />);

    wrapper.find(Cell).at(0).simulate('click');

    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');
  });

  it('renders the Board cell with a move on the 2nd cell', () => {
    const wrapper = mount(<App />);

    wrapper.find(Cell).at(1).simulate('click');

    expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('X');
  });

  it('renders the Board cell with an opponents move on the 2nd cell', () => {
    const wrapper = mount(<App />);
    let cell =  wrapper.find(Cell)
    cell.at(0).simulate('click')
    cell.at(1).simulate('click')

    expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('O');
  });

  it('renders the Board cell with a win on the first row', () => {
    const wrapper = mount(<App />);

    let cell =  wrapper.find(Cell)
    cell.at(0).simulate('click')
    cell.at(3).simulate('click')
    cell.at(1).simulate('click')
    cell.at(4).simulate('click')
    cell.at(2).simulate('click')

    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');
    expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('X');
    expect(wrapper.find(Cell).at(2).prop('cellValue')).toEqual('X');
  });
