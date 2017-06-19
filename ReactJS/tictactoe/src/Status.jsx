import React from 'react';

const Status = ({
  status,
  currentPlayer
}) => {
  return(
    <div>
      {status === `Loading` && `Waiting for Server`}
      {status === `In Progress` && `${currentPlayer}'s turn`}
      {status === `Won` && `${currentPlayer} has Won!`}
    </div>
  )
}

export default Status;
