import React from 'react';
import { mount } from 'enzyme';
import Display from '../components/Display';
import Board from '../lib/Board';
import Cell from '../components/Cell';
import App from '../App';
import Mode from '../components/GameMode';
import GameMode from '../lib/GameMode';

const board = new Board();
const opponentMode = 0;
const opponent = new GameMode().modeType(opponentMode);
const setShowMode = jest.fn();
const showMode = true;
const setOpponentMode = jest.fn();
const gameMode = new GameMode();

describe('<Display/>', () => {
  it('shows game options when gameMode button is clicked', () => {
    let AppWrapper = mount(<App board={board} gameMode={gameMode} />);
    let DisplayWrapper = mount(
      <Display
      board={board}
      opponentMode={opponentMode}
      showMode={showMode}
      opponent={opponent}
      setShowMode={setShowMode}
      setOpponentMode={setOpponentMode}
      />
      );
      
      const gameModeButton = DisplayWrapper.find('.commands').children().at(1);
      gameModeButton.simulate('click');
      
    expect(AppWrapper.find(Mode).prop('showMode')).toEqual(true);
    expect(AppWrapper.find('.display-board')).toHaveLength(0);
    expect(AppWrapper.find('.modes')).toHaveLength(1);
  });

  it('Re-renders an empty board when the restart button is clicked', () => {
    let wrapper = mount(
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

  it('Checks that the smart computer goes first when restart button is clicked', () => {
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
    cell.at(1).simulate('click');
    cell.at(5).simulate('click');
    cell.at(6).simulate('click');

    const restartButton = wrapper.find('.commands').children().at(2);
    restartButton.simulate('click');

    expect(wrapper.find(Cell).at(0).prop('cellValue')).toEqual('X');

    wrapper
      .find(Cell)
      .getElements()
      .slice(1,)
      .forEach((element) => {
          expect(element.props.cellValue).toEqual('');
      });
  });
});
