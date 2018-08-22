import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Navbar from './components/Navbar';

import Home from './features/Home';
import Login from './features/Login';
import Signup from './features/Signup';

class Routes extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </main>
      </Router>
    );
  }
}

export default Routes;
