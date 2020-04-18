import React, { Component } from 'react';

import FormField from '../FormField/FormField';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Ya tengo una cuenta</h2>
        <span>Inicia sesión con tu correo y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormField
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormField
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='Password'
            required
          />
          <div className='buttons'>
          <CustomButton type='submit'>
            Iniciar sesión
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Iniciar sesión con Google
          </CustomButton> 
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn;