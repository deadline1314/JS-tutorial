import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('root')
      )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    return (
      <button onClick={this.update.bind(this)}>
      {this.props.val}
      </button>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`)
  }
}

App.defaultProps = {val : 0}

export default App;
