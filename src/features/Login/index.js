import React, { Component } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'test',
      password: 'test123'
    };
  }

  chekInput = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  formSubmit = e => {
    e.preventDefault();

    api
      .loginUser(this.state)
      .then(resp => {
        localStorage.setItem('food_token', resp.data.token);

        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-3 center-div">
            <form onSubmit={this.formSubmit}>
              <Input
                label={'Usuario'}
                type={'text'}
                name={'username'}
                value={this.state.username}
                change={this.chekInput}
              />
              <Input
                label={'Contraseña'}
                type={'password'}
                name={'password'}
                value={this.state.password}
                change={this.chekInput}
              />
              <Button />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
