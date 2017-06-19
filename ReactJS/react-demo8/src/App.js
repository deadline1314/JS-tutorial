import React, { Component } from 'react';

//////Understanding React.Children Utilities
class App extends Component {
  render() {
    return (
      <Parent>
        <div calssName="childA"></div>
        <div calssName="childB"></div>
      </Parent>
    );
  }
}

class Parent extends Component {
  render() {
    //if only one child exist
    // console.log(this.props.children)

    //way 1
    // let items = React.children
    //   .map(this.props.children, child => child)

    // let items = React.children
    //   .forEach(this.props.children, child => child)

    //way 2
    //let items = React.Children.toArray(this.props.children)

    //return only one child, if more, will show error
    //React.Children.only(this.props.children)

    let items = this.props.children.map(child => child)
    console.log(items)
    return null
  }
}

export default App;
