import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Navbar from './components/Navbar';

class Routes extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
        </main>
      </Router>
    );
  }
}

export default Routes;
