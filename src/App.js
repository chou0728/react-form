import React, { Component } from 'react';
// import Form from './components/Form';
import FormWithItems from './components/FormWithItems';
import './App.css';
import Logo from './assets/logo.png';

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
        <h1>React Form</h1>
        <img src={Logo} alt="React logo" />
        {/* <Form /> */}
        <FormWithItems />
      </div>
    );
  }
}

export default App;
