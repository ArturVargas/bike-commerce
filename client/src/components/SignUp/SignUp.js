import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormField from '../FormField/FormField';
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../redux/user/user.actions';

import './SignUp.scss';

function SignUp({ singUp }) {

  const [userCredentials, setuserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden...!!');
      return;
    }
    singUp({ displayName, email, password })
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setuserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>Aún no tengo una cuenta</h2>
      <span>Registrate con tu correo</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormField
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Nombre'
          required
        />
        <FormField
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Correo Electronico'
          required
        />
        <FormField
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Contraseña'
          required
        />
        <FormField
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirma tu contraseña'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Registrarme</CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  singUp: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
