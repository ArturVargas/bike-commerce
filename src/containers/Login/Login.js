import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Login.scss';

const Login = () => (
  <div className='login'>
    <SignIn />
    <SignUp />
  </div>
);

export default Login;