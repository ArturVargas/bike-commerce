import React from 'react';

import './FormField.scss';

const FormField = ({ handleChange, label, ...others }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...others} />
    {
      label ? ( <label
        className={`${others.value.length ? 'shrink': ''} form-input-label`}
      >
        {label}
      </label> ) : null
    }
  </div>
);

export default FormField;