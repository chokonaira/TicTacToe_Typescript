import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Board from '../lib/Board';
import GameMode from '../lib/GameMode';
import Mode from '../components/GameMode';

const board = new Board();
const gameMode = new GameMode();

describe('App', () => {
  it('renders the App children hi', () => {
    let wrapper = mount(<App board={board} gameMode={gameMode} />);

    expect(wrapper.find('.App-mode').children().at(0).text()).toEqual(
      'Welcome to Tic Tac Toe'
    );
  });
});
