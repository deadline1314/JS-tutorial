import React from 'react';

const Cell = ({
  row,
  col,
  onClick,
  disabled,
  children
}) => {
  return(
    <button disabled={disabled} onClick={ () => onClick({row, col}) }>{children}</button>
  )
};
export default Cell;
