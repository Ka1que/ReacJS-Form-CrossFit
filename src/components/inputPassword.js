import React, { useState } from 'react';
import './input.css';
import Eye from '../icon/eye';
import EyeUnview from '../icon/eye_unview';

function InputPassword() {

  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div id='float-label' className='password'>

    <input
      type='password'
      value={value}
      id='inpSenha'
      maxLength='30'
      onChange={(e) => handleTextChange(e.target.value)}
    />

      <label className={isActive ? 'Active' : ''} htmlFor='email' >
        Digite sua senha
      </label>
      
      <Eye />
      <EyeUnview />

      <h1 id="txtHelperSenha" hidden>  </h1>
    </div>
  );
}

export default InputPassword;
