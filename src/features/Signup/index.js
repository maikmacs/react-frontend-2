import React, { Component } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'maik',
      last_name: 'macs',
      email: 'test@test.com',
      birth_date: '1990-06-19',
      password: 'test123',
      username: 'test',
      gender: 'male',
      phone: '123456789',
      password_confirm: 'test123'
    };
  }

  chekInput = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  checkPassword = () => {
    return this.state.password === this.state.password_confirm;
  };

  submitForm = e => {
    e.preventDefault();

    if (this.checkPassword()) {
      api
        .createUser(this.state)
        .then(resp => {
          console.log(resp.data);
          this.props.history.push('/login');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Los Passwords no coinciden');
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-3 center-div">
            <form onSubmit={this.submitForm}>
              <Input
                label={'Nombre'}
                type={'text'}
                name={'name'}
                value={this.state.name}
                change={this.chekInput}
              />
              <Input
                label={'Apellido'}
                type={'text'}
                name={'last_name'}
                value={this.state.last_name}
                change={this.chekInput}
              />
              <Input
                label={'Email'}
                type={'text'}
                name={'email'}
                value={this.state.email}
                change={this.chekInput}
              />
              <Input
                label={'Fecha de Nacimiento'}
                type={'text'}
                name={'birth_date'}
                value={this.state.birth_date}
                change={this.chekInput}
              />
              <Input
                label={'Telefono'}
                type={'text'}
                name={'phone'}
                value={this.state.phone}
                change={this.chekInput}
              />
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
              <Input
                label={'Confirmar Contraseña'}
                type={'password'}
                name={'password_confirm'}
                value={this.state.password_confirm}
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

export default Signup;
