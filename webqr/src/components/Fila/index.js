import React from 'react';
import * as F from './styles';
import profile from '../../assets/profile-picture.png';

function Fila({name}) {
  
  return (     
     <F.Content>
        <F.Fila><strong>{name}</strong></F.Fila> 
    </F.Content> 
  )
}

export default Fila;
