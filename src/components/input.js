import React, { useState } from 'react';
import './input.css';


function App() {

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
    
    <div id='float-label' className='email'>

    <input
      type='email'
      value={ value }
      id='inpEmail'
      onChange={(e) => handleTextChange(e.target.value)}
    />

      <label className={ isActive ? "Active" : ""} htmlFor="email" >
        Digite seu email 
      </label>

      <h1 id="txtHelperEmail" hidden>  </h1>
    </div>
  
  );
}

export default App;
