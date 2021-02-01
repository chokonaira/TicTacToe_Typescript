import React from 'react';
import { mount } from 'enzyme';
import Board from '../lib/Board';
import Cell from '../components/Cell';
import WebBoard from '../components/WebBoard';

const board = new Board();
const disableCells = false;
const className = 'row';
const setBoard = jest.fn();
const setDisableCells = jest.fn();

describe('<WebBoard/>', () => {
  it('renders the Board with 9 cells', () => {
    const wrapper = mount(
      <WebBoard
        board={board}
        disableCells={disableCells}
        className={className}
        setBoard={setBoard}
        setDisableCells={setDisableCells}
      />
    );
    expect(wrapper.find(Cell)).toHaveLength(9);
  });

  it('renders the Board with 9 cells with empty state', () => {
    const wrapper = mount(
      <WebBoard
        board={board}
        disableCells={disableCells}
        className={className}
        setBoard={setBoard}
        setDisableCells={setDisableCells}
      />
    );

    wrapper
      .find(Cell)
      .getElements()
      .forEach((element) => {
        expect(element.props.cellValue).toEqual('');
      });
  });
});
