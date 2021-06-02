import React from 'react'; 
import './mensagem.css';
import Wavehand from '../icon/wave_hand.png'

export default class App extends React.Component{
  render(){
    //uma variavel que subistitui uma função deve buscar o nome do usuario no caso de uma segunda seção
    var nomeUsu = 'kaique';
    
    return(
      <h1 className='txtBemVindo'> 
       Seja bem vindo<br />
       de volta,<b className="nomeUsu"> {nomeUsu}</b> <img src={Wavehand} className='wavehand' /> 
      </h1>
      )
  }
}