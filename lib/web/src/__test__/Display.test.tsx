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
const showMode = true;
const setOpponentMode = jest.fn();

describe('<Display/>', () => {
  it('renders the WebBoard component', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        showMode={showMode}
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
        showMode={showMode}
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
        showMode={showMode}
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
        showMode={showMode}
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
        showMode={showMode}
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
        showMode={showMode}
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

  it('Checks that the smart computer goes first when smart computer mode is clicked', () => {
    const SmartOpponentMode = 1;
    const SmartOpponent = new GameMode().modeType(SmartOpponentMode);
    let wrapper = mount(
      <Display
        board={board}
        opponentMode={SmartOpponentMode}
        showMode={showMode}
        opponent={SmartOpponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );
    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');
  });

  it('Checks that the smart computer makes a winning move', () => {
    const board = new Board(['X', 'X', '', 'O', '', '', '', '', '']);
    const SmartOpponentMode = 1;
    const SmartOpponent = new GameMode().modeType(SmartOpponentMode);
    let wrapper = mount(
      <Display
        board={board}
        opponentMode={SmartOpponentMode}
        showMode={showMode}
        opponent={SmartOpponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );
    let cell = wrapper.find(Cell);
    cell.at(5).simulate('click');
    expect(wrapper.find(Cell).at(2).prop('cellValue')).toEqual('X');
    expect(wrapper.find('.status').text()).toEqual('Congratulations: X has won! 🎉');
  });

  it('Checks that the board cells are diabled when a smart computer opponent wins', () => {
    const board = new Board(['X', 'X', '', 'O', 'O', '', '', '', '']);
    const SmartOpponentMode = 1;
    const SmartOpponent = new GameMode().modeType(SmartOpponentMode);
    let wrapper = mount(
      <Display
        board={board}
        opponentMode={SmartOpponentMode}
        showMode={showMode}
        opponent={SmartOpponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );
    expect(wrapper.find(Cell).at(8).prop('disabled')).toEqual(true);
  });

  it('Checks it re-renders the a empty board when the restart button is clicked', () => {
    const HumanOpponentMode = 0;
    const SmartOpponent = new GameMode().modeType(HumanOpponentMode);
    let wrapper = mount(
      <Display
        board={board}
        opponentMode={HumanOpponentMode}
        showMode={showMode}
        opponent={SmartOpponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(1).simulate('click');
    cell.at(5).simulate('click');
    cell.at(6).simulate('click');

    const restartButton = wrapper.find('.commands').children().at(2);
    restartButton.simulate('click');

    wrapper
      .find(Cell)
      .getElements()
      .forEach((element) => {
        expect(element.props.cellValue).toEqual('');
      });
  });

  it('Checks that the board cells are diabled when its the smart computer turn', () => {
    const board = new Board(['X', 'X', '', 'O', 'O', '', '', '', '']);
    const SmartOpponentMode = 1;
    const SmartOpponent = new GameMode().modeType(SmartOpponentMode);
    let wrapper = mount(
      <Display
        board={board}
        opponentMode={SmartOpponentMode}
        showMode={showMode}
        opponent={SmartOpponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );
    expect(wrapper.find(Cell).at(3).prop('disabled')).toEqual(true);
  });

  it('Checks that the board cells are enabled when its the Human turn', () => {
    const board = new Board(['X', '', '', '', '', '', '', '', '']);
    const SmartOpponentMode = 1;
    const SmartOpponent = new GameMode().modeType(SmartOpponentMode);
    let wrapper = mount(
      <Display
        board={board}
        opponentMode={SmartOpponentMode}
        showMode={showMode}
        opponent={SmartOpponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
      />
    );
    expect(wrapper.find(Cell).at(0).prop('disabled')).toEqual(false);
  });
});
