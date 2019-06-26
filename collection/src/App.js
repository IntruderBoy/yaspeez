import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Overview from './components/Overview'
import Profile from './components/Profile'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>          
            <Route exact path="/"  component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/overview" component={Overview} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
 
      </div>
    );
  }
}

export default App;
