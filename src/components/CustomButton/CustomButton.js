import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, ...other }) => (
  <button className='custom-button' {...other}>
    {children}
  </button>
);

export default CustomButton;