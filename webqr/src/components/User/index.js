import React from 'react';
import * as S from './styles';
import profile from '../../assets/profile-picture.png';

function User({name, dateNasc, cpf, cns }) {
  
  return (
    
    
      
     <S.Content>
      <center><img src={profile} width="150" height="150" /></center>
      <S.CardContent>
        <S.Card><strong>Nome: {name}</strong></S.Card> 
        <S.Card><strong>Data de nascimento: {dateNasc}</strong></S.Card> 
        <S.Card><strong>CPF: {cpf}</strong></S.Card> 
        <S.Card><strong>CNS: {cns}</strong></S.Card> 
      </S.CardContent>
    </S.Content> 
    

  )
}

export default User;
