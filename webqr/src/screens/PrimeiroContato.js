
import './App.css';
import React, { useState, useEffect } from 'react';
import * as S from '../components/User/styles';
import fila from '../assets/fila.png';
import cores from '../assets/cores.png';
import  User  from '../components/User';
import api from '../services/api';
import profile from '../assets/profile-picture.png';
import * as I from '../components/Text/styles';
import Input from '../components/Text';



function PrimeiroContato() {
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
            
            <br/><br/><br/>
            <I.CardLogin>
            <br/>
              <center>
        <p><strong>Envie seu email e entraremos em contato com você para seu cadastro!</strong></p>
        <br/> <br/> <br/>
        

        <I.Card input name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        
        <br/> 
        <button onClick={putData} >
                    Adicionar dados 
                </button>
                </center>
                </I.CardLogin>
      </header>

      
    </div>


    
     
        
    
  
  );
}

export default PrimeiroContato;
