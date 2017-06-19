import React, { Component } from 'react';

///// Use React.cloneElement to Extend Functionality of Children Components
class App extends Component {
  render() {
    return (
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
}


class Buttons extends Component {
  constructor() {
    super();
    this.state = {selected: 'None'}
  }
  selectItem(selected) {
    this.setState({selected});
  }
  render() {
    //let items = this.props.children;

    let fn = child =>
      //beacuse props are immutable, so we can only make copies
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      })

    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}

      </div>
    )
  }
}

export default App;
