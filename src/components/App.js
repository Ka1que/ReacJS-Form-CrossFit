import React from 'react';
import './App.css';
import Logo from './logo';
import Mensagem from './mensagem';
import Input from './input';
import InputPassword from './inputPassword';
import imgBanner from '../img/banner.png';
import Loading from '../icon/loading.png';

export default class App extends React.Component {

  handleSubmit(e){
    e.preventDefault();
  
    let email = e.target[0].value;
    let senha = e.target[1].value;

    const txtHelperEmail = document.getElementById('txtHelperEmail');
    const txtHelperSenha = document.getElementById('txtHelperSenha');
    const inpEmail = document.getElementById('inpEmail');
    const inpSenha = document.getElementById('inpSenha');/* 
    const floatLabel = document.getElementById('float-label');
    const floatLabelPassword = document.getElementsByClassName('password')[0]; */
    

    if(email === ""){
      txtHelperEmail.removeAttribute('hidden');
      inpEmail.style.color= "red";
      inpEmail.style.borderColor= "red";/* 
      floatLabel.style.top= "48%"; */
      return;
    }else{
      inpEmail.removeAttribute('style');/* 
      floatLabel.style.top= "50%"; */
      txtHelperEmail.setAttribute('hidden','');
    }

    if( email.indexOf("@") < 0){
      txtHelperEmail.innerHTML = "Por favor insira um email válido";/*Por favor insira um email válido.  sem @ não dá né mano*/
      txtHelperEmail.removeAttribute('hidden');
      inpEmail.style.color= "red";
      inpEmail.style.borderColor= "red";/* 
      floatLabel.style.top= "48%"; */
      return;
    }else{
      inpEmail.removeAttribute('style');/* 
      floatLabel.style.top= "50%"; */
      txtHelperEmail.setAttribute('hidden','');
    }

    if( senha.length<=4){
      window.alert("insira uma senha maior");
      txtHelperSenha.innerHTML = "Por favor insira uma senha com no minimo 5 carácteres";
      txtHelperSenha.removeAttribute('hidden');
      inpSenha.style.color= "red";
      inpSenha.style.borderColor= "red";/* 
      floatLabel.style.top= "48%";
      floatLabelPassword.style.top= "58%"; */
      return;
    }else{
      inpEmail.removeAttribute('style');
      inpSenha.removeAttribute('style');/* 
      floatLabel.style.top= "50%";
      floatLabelPassword.style.top= "60%"; */
      txtHelperSenha.setAttribute('hidden','');
    }

    document.getElementById('loading').style.display = 'block';
  }

  render(){
  //div raiz que irá receber todos os componentes da tela
  return (
      <div>  

        <div className='header'>
          <Logo />
        </div>
        
        <div className='containerBanner'>
          <img className='imgBanner' alt="problemas em carregar a imagem desculpa o inconveniente" src={ imgBanner } />
        </div>

        <Mensagem />
          
        <form onSubmit={this.handleSubmit} noValidate>
            
          <Input  />
          <InputPassword />
            
          <button type="submit"> <p>Acessar conta</p> <img id="loading" src={Loading} alt="problemas em carregar a imagem desculpa o inconveniente" /> </button>
          
        </form>

      </div>
    )
  }
}