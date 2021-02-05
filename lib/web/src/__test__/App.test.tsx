import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Board from '../lib/Board';
import GameMode from '../lib/GameMode';
import Mode from '../components/GameMode';
import Display from '../components/GameMode';

const board = new Board();
const gameMode = new GameMode();

describe('App', () => {
  it('renders the App welcome message', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    expect(wrapper.find('.welcome').children().at(0).text()).toEqual(
      'Welcome to Tic Tac Toe'
    );
  });

  it('wraps a Mode component on initial render', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    expect(wrapper.find(Mode)).toHaveLength(1);
  });

  it('wraps a Display component on initial render', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    expect(wrapper.find(Display)).toHaveLength(1);
  });

  it('It does not Display the game board on initial render', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    expect(wrapper.find('.display-board')).toHaveLength(0);
  });

  it('On initial render the user sees the game mode with the game options', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);

    expect(wrapper.find(Mode).prop('showMode')).toEqual(true);
    expect(wrapper.find('.modes').children().at(0).text()).toEqual(
      'Select Game Mode'
    );
    expect(wrapper.find('.mode-types').children().at(0).text()).toEqual(
      'Play against a Human Player'
    );
    expect(wrapper.find('.mode-types').children().at(1).text()).toEqual(
      'Play against a Smart Computer'
    );
    expect(wrapper.find('.mode-types').children().at(2).text()).toEqual(
      'Play against a Random Computer'
    );
  });

  it('It render the game board when the Human mode is clicked', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    const mode = wrapper.find('.mode-types').children().at(0).simulate('click');
    mode.simulate('click');
    expect(wrapper.find('.display-board')).toHaveLength(1);
  });

  it('It render the game board when the Smart computer mode is clicked', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    const mode = wrapper.find('.mode-types').children().at(1).simulate('click');
    mode.simulate('click');
    expect(wrapper.find('.display-board')).toHaveLength(1);
  });

  it('It render the game board when the Random computer mode is clicked', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);
    const mode = wrapper.find('.mode-types').children().at(2).simulate('click');
    mode.simulate('click');
    expect(wrapper.find('.display-board')).toHaveLength(1);
  });
});
