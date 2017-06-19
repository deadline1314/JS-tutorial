import React, { Component } from 'react';
import './App.css';
import ChoosePage from './ChoosePage';
import Intro from './Intro';
import Entry from './Entry';
import Entry2 from './Entry2';
import Entry3 from './Entry3';
import Entry4 from './Entry4';
import Success from './Success';

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: 'Intro',
      first: '',
      second: '',
      validations: { missing: {}, invalid: {}, notFive: {} }
    }
  }

  onPageSelect( page ) {
    this.setState( {
      validations:{ missing:{}, invalid:{}, notFive:{} },
      first: '',
      second: '',
      page
    });
  }

  onLowsOnlyChange(field, value) {
    //Lower case input only
    if(value.toLowerCase() === value) {
      this.setState({[field]: value});
    }
  }
  onUpsOnlyChange(field, value) {
    //Upper case input only
    if(value.toUpperCase() === value) {
      this.setState({[field]: value});
    }
  }

  onSubmitCheckRequired() {
    const problems = this.validate( { first: this.state.first, second: this.state.second} );
    if(Object.keys(problems.missing).length) {
      this.setState({ validations: problems });
      return;
    }
    if(Object.keys(problems.invalid).length) {
      this.setState({ validations: problems });
      return;
    }
    this.setState({ validations: { missing: {}, invalid: {} }} );
    this.setState({page: 'Success'});
  }

  validate( { first, second }) {
    const result = { missing: {}, invalid: {} };
    if(first === '') {
      result.missing.first = true;
    }
    if(second === '') {
      result.missing.second = true;
    }
    return result;
  }

////check for length of 5
  oncheckForFive(field, value) {
    this.setState({[field]: value});
  }

  onSubmitForFive() {
    const problems = this.validateForFive( { first: this.state.first, second: this.state.second} );
    if(Object.keys(problems.missing).length) {
      this.setState({ validations: problems });
      return;
    }
    if(Object.keys(problems.invalid).length) {
      this.setState({ validations: problems });
      return;
    }
    if(Object.keys(problems.notFive).length) {
      this.setState({ validations: problems });
      return;
    }   
    this.setState({ validations: { missing: {}, invalid: {}, notFive:{} }} );
    this.setState({page: 'Success'});
  }

  validateForFive( { first, second } ) {
    const result = { missing: {}, invalid: {}, notFive: {} };
    if(first === '') {
      result.missing.first = true;
    }
    if(second === '') {
      result.missing.second = true;
    }
    if(first.length !== 5) {
      result.notFive.first = true;
    }
    if(second.length !== 5) {
      result.notFive.second = true;
    }
    return result;
  }

/////////////////////////check for numbers
  checkForNumber() {

  }

////////////////////////check for email
  checkForEmail() {

  }


  render() {
    return (
      <div>
      <ChoosePage 
        pages={['Intro', 'Entry', 'Entry2', 'Entry3', 'Entry4']}
        page={this.state.page}
        onPageSelect={ (e) => { this.onPageSelect(e.target.value) } }
      />

      { this.state.page === 'Intro' && <Intro /> }

      { this.state.page === 'Entry' && <Entry 
        first={this.state.first}
        second={this.state.second}
        validations={this.state.validations}
        onInputChange={this.onLowsOnlyChange.bind(this)}
        onSubmit={this.onSubmitCheckRequired.bind(this)}
      /> }

      { this.state.page === 'Entry2' && <Entry2
        first={this.state.first}
        second={this.state.second}
        validations={this.state.validations}
        onInputChange={this.onUpsOnlyChange.bind(this)}
        onSubmit={this.onSubmitCheckRequired.bind(this)}
       /> }

      { this.state.page === 'Entry3' && <Entry3
        first={this.state.first}
        second={this.state.second}
        validations={this.state.validations}
        onInputChange={this.oncheckForFive.bind(this)}
        onSubmit={this.onSubmitForFive.bind(this)}
       /> }

        { this.state.page === 'Entry4' && <Entry4
        first={this.state.first}
        second={this.state.second}
        validations={this.state.validations}
        onInputChange={this.oncheckForFive.bind(this)}
        onSubmit={this.onSubmitForFive.bind(this)}
       /> }

      { this.state.page === 'Success' && <Success /> }
      </div>
    );
  }
}

export default App;