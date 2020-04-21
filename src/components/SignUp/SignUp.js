import React, { Component } from 'react';

import FormField from '../FormField/FormField';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

import './SignUp.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden...!!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Aún no tengo una cuenta</h2>
        <span>Registrate con tu correo</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormField
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Nombre'
            required
          />
          <FormField
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Correo Electronico'
            required
          />
          <FormField
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Contraseña'
            required
          />
          <FormField
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirma tu contraseña'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Registrarme</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
