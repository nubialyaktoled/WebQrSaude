
import './App.css';
import React, { useState, useEffect } from 'react';
import * as S from '../../components/User/styles';
import fila from '../../assets/fila.png';
import cores from '../../assets/cores.png';
import  User  from '../../components/User';
import api from '../../services/api';
import profile from '../../assets/profile-picture.png';
import * as I from '../../components/Text/styles';
import Input from '../../components/Text';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrimeiroContato from '../PrimeiroContato';


function Login() {
  const [email, setEmail] = useState('');

   
  async function putData(){
    const response = await api.post('api/hospital', 
        {
            "email": email,
            "name": "e",
            "password": "e",
            "tel": "e",
            "contrato": "e"
        })

  }




  return (
    <div className="PrimeiroContato">
      <header className="App-header">
            
        <p><strong>Faça seu login!</strong></p>
        <br/> <br/>
        

        <I.Card input name="contrato" placeholder="Número de contrato" onChange={e=>setEmail(e.target.value)} />
        <br/> <br/>
        <I.Card input name="password" placeholder="Senha" onChange={e=>setEmail(e.target.value)} />
        
        <br/> 

        <button onClick={putData} >
                   Login</button>

                   <br/>

          <Link to="/Primeiro Contato"> Não é cadastrado? Cadastre-se!</Link>
        
      </header>

      
    </div>


    
     
        
    
  
  );
}

export default Login;
