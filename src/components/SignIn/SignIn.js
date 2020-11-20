import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from '../FormField/FormField';
import CustomButton from '../CustomButton/CustomButton';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './SignIn.scss';

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignIn } = this.props;
    const { email, password } = this.state;
  
    emailSignIn(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignIn } = this.props;
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
            <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>
              Iniciar sesión con Google
            </CustomButton> 
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);