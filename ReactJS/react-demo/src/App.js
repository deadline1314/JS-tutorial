// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to React</h2>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
import { Component } from 'react'

class App extends Component {

  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update( e ) {
    this.setState( {txt: e.target.value} )
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
  // render() {
  //   let txt = this.props.txt;
  //   return <h1>{txt}</h1>
  //   //return React.createElement('h1', null, 'Hi')
  // }
}


const Widget = (props) =>
  <input type="text" onChange={props.update}/>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

//const App = () => <h1>Hi</h1>
export default App;
