import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Board from '../lib/Board';
import GameMode from '../lib/GameMode';

const board = new Board();
const gameMode = new GameMode();

describe('App', () => {
  it('renders the App children hi', () => {
    let wrapped = mount(<App board={board} gameMode={gameMode} />);
    
    expect(wrapped.find('h1').text()).toEqual('Tic Tac Toe');
  });
});
