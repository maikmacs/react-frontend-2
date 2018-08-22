import React, { Component } from 'react';

import './style.scss';

class Button extends Component {
  render() {
    return (
      <button type="submit" className="btn btn-success mx-auto">
        Empezar
      </button>
    );
  }
}

export default Button;
