import React, { Component } from 'react';
// import Form from './components/Form';
import FormWithItems from './components/FormWithItems';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: false
    };
  }
  render() {
    return (
      <div className="App">
        <FormWithItems />
      </div>
    );
  }
}

export default App;
