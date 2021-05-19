import React from 'react';
import './logo.css';
import img from '../img/danilinho-foto.png';

export default class App extends React.Component {
  render(){
    return(

      <div className='logo'>
        <img className='imgLogo' alt="problemas em carregar a imagem desculpa o inconveniente" src={ img } />
        <h1 className='txtLogo'> CrossFIT <br />do <b className="bold">Bairro</b> </h1>
      </div>

    );
  }
}