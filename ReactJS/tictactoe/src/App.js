import React, { Component } from 'react';

import { newGame, takeTurn } from './services';

import Board from './Board';
import Status from './Status';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: null,
      status: 'Loading',
      currentPlayer: null      
    };    
    this.onCellClick = this.onCellClick.bind(this);
  }

  componentDidMount() { 
    newGame().then( (game) => {
      this.setState({
        board: game.board,
        status: game.progress,
        currentPlayer: game.currentPlayer
      });      
    });
  }

  onCellClick({ row, col }) {
    const board = this.state.board;
    const currentPlayer = this.state.currentPlayer;
    board[row][col] = currentPlayer;
    const nextPlayer = 'XO'.replace(currentPlayer, '');

    takeTurn({ 
      board, 
      progress: this.state.status, 
      currentPlayer: nextPlayer
    }).then( (game) => {
      this.setState({
        board: game.board,
        status: game.progress,
        currentPlayer: game.currentPlayer
      });
    });
    this.setState({ status: 'Loading' });
  }

  render() {
    return (
      <div>
        <Board board={this.state.board} disabled={ this.state.status !== 'In Progress' } onCellClick={ this.onCellClick } /> 
        <Status status={this.state.status} currentPlayer={this.state.currentPlayer} />
      </div>
    );
  }
}

export default App;
