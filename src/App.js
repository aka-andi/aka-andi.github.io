import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    }
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Portfolio data={this.state.resumeData.portfolio} />
            <Resume data={this.state.resumeData.resume} />
            <Footer data={this.state.resumeData.footer} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
