import React, { Component } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-3 center-div">
            <form action="">
              <Input label={'Usuario'} type={'text'} />
              <Input label={'Contraseña'} type={'password'} />
              <Button />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
