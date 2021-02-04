import React from 'react';
import { mount } from 'enzyme';
import Display from '../components/Display';
import Board from '../lib/Board';
import Cell from '../components/Cell';
import WebBoard from '../components/WebBoard';
import GameMode from '../lib/GameMode';

const board = new Board();
const opponentMode = 0;
const opponent = new GameMode().modeType(opponentMode);
const setShowMode = jest.fn();
const setOpponentMode = jest.fn();

describe('<Display/>', () => {
  it('renders the WebBoard component', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );

    expect(wrapper.find(WebBoard)).toHaveLength(1);
  });

  it('renders the Board cell with X move on the first cell', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );

    wrapper.find(Cell).at(0).simulate('click');

    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');
  });

  it('renders the Board cell with the opponents move on the 2nd cell', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );
    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');
    cell.at(1).simulate('click');

    expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('O');
  });

  it('renders the Board cell with a win on the first row', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');
    cell.at(3).simulate('click');
    cell.at(1).simulate('click');
    cell.at(4).simulate('click');
    cell.at(2).simulate('click');

    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');
    expect(wrapper.find(Cell).at(1).prop('cellValue')).toEqual('X');
    expect(wrapper.find(Cell).at(2).prop('cellValue')).toEqual('X');
  });

  it('Disables the cells if there is a win on the board', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');
    cell.at(3).simulate('click');
    cell.at(1).simulate('click');
    cell.at(4).simulate('click');
    cell.at(2).simulate('click');

    expect(wrapper.find(Cell).at(8).prop('disabled')).toEqual(true);
  });

  it('Checks that you cannot make another move on an already marked cell', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');
    cell.at(0).simulate('click');

    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');
  });
});
