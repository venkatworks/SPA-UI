import React, { Component } from 'react';
import './App.css';
import Login from './components/login.component';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

export default App;
