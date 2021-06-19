import React from 'react';
import * as S from './styles';
import profile from '../../assets/profile-picture.png';

function User({name, email, password, createdAt }) {
  
  return (
    
    
      
     <S.Content>
      <S.pic><img src={profile} width="100" height="100" /></S.pic> 
      <S.CardContent>
        <S.Card><strong>{name}</strong></S.Card> 
        <S.Card><strong>{email}</strong></S.Card> 
        <S.Card><strong>{password}</strong></S.Card> 
        <S.Card><strong>{createdAt}</strong></S.Card> 
      </S.CardContent>
    </S.Content> 
    

  )
}

export default User;
