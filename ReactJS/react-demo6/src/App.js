import React, { Component } from 'react';
//Compose React Component Behavior with Higher Order Components
const HOC = (InnerComponent) => class extends Component {
  constructor() {
    super();
    this.state={count : 0}
  }
  update() {
    this.setState({count: this.state.count + 1});
  }
  componentWillMount() {
    console.log('component will mount')
  }
  render() {
    return (
      <InnerComponent 
        {...this.props}
        {...this.state}
        update = {this.update.bind(this)}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}
//stateless component
const Button = HOC((props) => 
  <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends Component {
  componentWillMount() {
    console.log('label will mount')
  }
  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App;
