
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
import Home from '../Home';


function TelaPrincipal() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');

   
  return (
    <div className="TelaPrincipal">
      <header className="App-header">
            

      
      <S.Container>
        <center>
        <S.Card><Link to="/Paciente"> Ler QR CODE</Link></S.Card>
        <br></br>
        <S.Card><Link to="/FilaClinico"> Fila de pacientes Clínico</Link></S.Card>
         
         <S.Card><Link to="/FilaPediatra"> Fila de pacientes Pediatra</Link></S.Card>
         
         <S.Card><Link to="/FilaEmergencia"> Fila de pacientes Emergência</Link></S.Card>
         
         <S.Card><Link to="/FilaOrtopedista"> Fila de pacientes Ortopedista</Link></S.Card>
       </center>
       </S.Container>

      </header>
    </div>


    
     
        
    
  
  );
}

export default TelaPrincipal;
