import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/////Write More Reusable React Components with Composable APIs

class App extends Component {
  constructor() {
    super();
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    });
  }
  render() {
    return (
      <div>
        <NumInput 
        ref="red" 
        min={0}
        max={255}
        step={1}
        val={+this.state.red}
        //type="number"
        label="Red"
        update={this.update} 
        />
      </div>
    )
  }

}

class NumInput extends Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} : {this.props.val}</label> : ''
    return (
      <div>
        <input ref="inp" 
          type={this.props.type}
          min={this.props.min}
          max={this.props.max} 
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update}
        />
        {label}
      </div>
    );
  }
}

NumInput.propTypes ={
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       red: 0,
//       green: 0,
//       blue: 0
//     }
//     this.update = this.update.bind(this)
//   }
//   update(e) {
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//       green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Slider ref="red" update={this.update} />
//         {this.state.red}
//         <br />
//         <Slider ref="green" update={this.update} />
//         {this.state.green}
//         <br />
//         <Slider ref="blue" update={this.update} />
//         {this.state.blue}
//         <br />       
//       </div>
//     );
//   }
// }

// class Slider extends Component {
//   render() {
//     return (
//       <div>
//         <input ref="inp" type="range"
//           min="0"
//           max="255"
//           onChange={this.props.update} 
//         />
//       </div>
//     )
//   }
// }

export default App;
