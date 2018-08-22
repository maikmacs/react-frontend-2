import React, { Component } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-3 center-div">
            <form action="">
              <Input label={'Nombre'} type={'text'} />
              <Input label={'Apellido'} type={'text'} />
              <Input label={'email'} type={'text'} />
              <Input label={'Fecha de Nacimiento'} type={'text'} />
              <Input label={'Contraseña'} type={'password'} />
              <Button />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
