import React, { Component } from 'react';
import './styles.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light sinDelantal-nav">
        <a className="navbar-brand" href="#">
          Sin Delantal Clone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapseAirbnb"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="collapseAirbnb">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Propiedades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
