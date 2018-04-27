import React, {Component} from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from './Components/Auth/SignUp'
import SignIn from './Components/Auth/SignIn'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/" component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
