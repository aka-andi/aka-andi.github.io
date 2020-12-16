import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Header/>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
