import React from 'react';
import * as I from './styles';
import profile from '../../assets/profile-picture.png';

function Input() {
  
  return (
    
    
     <I.Container>
         <I.Input placeholder="hello" placeholderTextColor="green" />
         <I.CardContainer>
            <I.Card placeholder="hello" placeholderTextColor="green" />
            <I.Card placeholder="hello" placeholderTextColor="green" />
            <I.Card placeholder="hello" placeholderTextColor="green" />
         </I.CardContainer>
     </I.Container>

  )
}

export default Input;
