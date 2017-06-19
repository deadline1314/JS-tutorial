import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { a: '' }
  }
  update(e) {
    this.setState({ 
      a: this.a.value,
      b: this.refs.b.value,
      //c: ReactDOM.findDOMNode(this.c).value
      c: this.c.refs.input.value
    });
  }
  render() {
    return (
    <div>
      <input
        ref={ node => this.a = node }
        type="text"
        onChange={this.update.bind(this)}
      />{this.state.a}
      <hr />
      <input
        ref="b"
        type="text"
        onChange={this.update.bind(this)}
      />{this.state.b} 
      <hr />
      <Input
        ref={ component => this.c = component }
        update={this.update.bind(this)}
      />{this.state.c}    
    </div>
    )
  }
}
class Input extends Component {
  render() {
    //return <input type="text" onChange={this.props.update} />
    return <div><input ref="input" type="text" onChange={this.props.update}/></div>
  }
}







/*
//Normalize Events with Reacts Synthetic Event System
class App extends Component {
  constructor() {
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({currentEvent: e.type});
  }

  render() {
    return (
      <div>
        <textarea 
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          //for ipad emulator
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10"
          />
          <h1>{this.state.currentEvent}</h1>
      </div>
      );
  };
}
*/



/*
//Access Nested Data with Reacts props.children
class App extends Component {
  render() {
    return (
      <Button>I <Heart /> React</Button>
    );
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends Component {
  render() {
    return <span>&hearts;</span>
  }
}
*/

/*
//Add Custom propType Validation to React Components
class App extends Component {
  render() {
    return <Title text="The Text" />
  }
}


const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error('missing ${propName}');
    }
    if(props[propName].length < 6) {
      return new Error('${propName} was too short.')
    }
  }
}
*/

export default App;
