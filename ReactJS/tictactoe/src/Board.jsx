import React from 'react';

import Cell from './Cell';

const Board = ({
  board,
  disabled,
  onCellClick
}) => {
  const cells = [];
  for(let row = 0; row < 3; row++) {
    const tempRow = [];
    for(let col = 0; col < 3; col++) {
      tempRow.push( 
        <Cell 
          key={col} 
          row={row}
          col={col}
          onClick={onCellClick}
          disabled={ disabled || board[row][col] !== ' '} >
          { board && board[row][col] }
        </Cell>
      );
    }    
    cells.push( <div key={row}>{tempRow}</div> );
  }
  return (
    <div id={"board"}>
      {cells}
    </div>
  )
};
export default Board;
