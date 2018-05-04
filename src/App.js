import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from './Components/Auth/SignUp';
import SignIn from './Components/Auth/SignIn';
import Events from './Components/Groups/Events';
import UsersWhoVote from "./Components/Groups/UsersWhoVote";
import Groups from "./Components/Groups/Groups";


import './App.css';
import GroupList from './Components/Groups/GroupList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/SignIn" component={SignIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/" component={SignUp}/>
          <Route exact path="/Events" component={Events}/>
          <Route exact path="/UsersWhoVote" component={UsersWhoVote}/>
          <Route exact path="/Groups" component={Groups} />
        </div>
      </Router>
    );
  }
}

export default App;