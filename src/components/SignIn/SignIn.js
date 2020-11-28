import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormField from '../FormField/FormField';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './SignIn.scss';

function SignIn({ emailSignIn, googleSignIn }) {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignIn(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>Ya tengo una cuenta</h2>
      <span>Inicia sesión con tu correo y contraseña</span>

      <form onSubmit={handleSubmit}>
        <FormField
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormField
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>
            Iniciar sesión
            </CustomButton>
          <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>
            Iniciar sesión con Google
            </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);