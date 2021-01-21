import React from 'react';
import Board from '../lib/Board';
import '../App.css';

interface Props {
  board: Board;
}

const WebBoard = (props: Props) => (
  <div className="board-container">
    {props.board.rows().map((row, index) => (
      <div className="row" key={index+1}>
        <button className="cell">{row[0]}</button>
        <button className="cell">{row[1]}</button>
        <button className="cell">{row[2]}</button>
      </div>
    ))}
  </div>
);
export default WebBoard;
