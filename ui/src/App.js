import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import AppRoutes from './app-routes';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {AppRoutes}
        </Router>       
      </div>
    );
  }
}

export default App;
