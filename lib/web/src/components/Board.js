import React from 'react';
import '../App.css';
import GameBoard from '../../../Board.ts'

const Board = () => (
 <div className='board-container'>
   <div className="row">
     <button className="cell"></button>
     <button className="cell"></button>
     <button className="cell"></button>
   </div>
   <div className="row">
     <button className="cell"></button>
     <button className="cell"></button>
     <button className="cell"></button>
   </div>
   <div className="row">
     <button className="cell"></button>
     <button className="cell"></button>
     <button className="cell"></button>
   </div>
 </div>
);
export default Board;