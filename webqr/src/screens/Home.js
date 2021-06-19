
import './App.css';
import React from 'react';
import fila from '../assets/fila.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrimeiroContato from './PrimeiroContato';


function Home() {
  return (
    <div className="Home">
      <header className="App-header">
            
        <p>Ganhe mais tempo no seu atendimento e evite filas! {'\n'}</p>

        <img src={fila} width="520" height="270" />

        <p> {'\n'} Cadastre se em nossa plataforma e ganhe mais agilidade no atendimento do seu hospital{'\n'}</p>
              
     <Link to="/PrimeiroContato">Cadastre-se!</Link>
      
        
        
      </header>

      
    </div>


    
     
        
    
  
  );
}

export default Home;
