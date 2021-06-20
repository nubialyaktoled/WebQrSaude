import React from 'react';
import * as S from './styles';
import profile from '../../assets/profile-picture.png';

function User({name, dateNasc, cpf, cns }) {
  
  return (
    
    
      
     <S.Content>
      <S.pic><img src={profile} width="100" height="100" /></S.pic> 
      <S.CardContent>
        <S.Card><strong>{name}</strong></S.Card> 
        <S.Card><strong>{dateNasc}</strong></S.Card> 
        <S.Card><strong>{cpf}</strong></S.Card> 
        <S.Card><strong>{cns}</strong></S.Card> 
      </S.CardContent>
    </S.Content> 
    

  )
}

export default User;
