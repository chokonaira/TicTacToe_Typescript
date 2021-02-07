import React from 'react';
import { mount } from 'enzyme';
import Display from '../components/Display';
import Board from 'tictactoe-board';
import Cell from '../components/Cell';
import GameMode from '../lib/GameMode';

const board = new Board();
const opponentMode = 0;
const opponent = new GameMode().modeType(opponentMode);
const setShowMode = jest.fn();
const showMode = true;
const setOpponentMode = jest.fn();

describe('<Board/>', () => {
  it('show a winning status message if there is a win on the board', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
        showMode={showMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');
    cell.at(3).simulate('click');
    cell.at(1).simulate('click');
    cell.at(4).simulate('click');
    cell.at(2).simulate('click');

    expect(wrapper.find('.status').text()).toEqual(
      'Congratulations: X has won! 🎉'
    );
  });

  it('show a status messaage with the next players turn on the board', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
        showMode={showMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');

    expect(wrapper.find('.status').text()).toEqual('Next player is: O');
  });

  it('show a draw status message if there is a draw on the board', () => {
    const wrapper = mount(
      <Display
        board={board}
        opponentMode={opponentMode}
        opponent={opponent}
        setShowMode={setShowMode}
        setOpponentMode={setOpponentMode}
        showMode={showMode}
      />
    );

    let cell = wrapper.find(Cell);
    cell.at(0).simulate('click');
    cell.at(4).simulate('click');
    cell.at(2).simulate('click');
    cell.at(1).simulate('click');
    cell.at(7).simulate('click');
    cell.at(3).simulate('click');
    cell.at(5).simulate('click');
    cell.at(8).simulate('click');
    cell.at(6).simulate('click');

    expect(wrapper.find('.status').text()).toEqual('Its a Draw game 😁');
  });
});
