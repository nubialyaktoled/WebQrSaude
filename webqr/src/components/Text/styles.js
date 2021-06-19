import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
grid-area: input;
width: 750px;
height: 300px;
border-radius: 60px;
background-color: white;
font-size: 20;
display: flex;
align-items: right;
justify-content: center;
text-align: center;

margin: 20px;
cursor: pointer;
transition: all 0.3s ease;
`

export const Container = styled.p`
background-color: #dbead5;
width: 100%;
justify-content: right;
margin-bottom: 10px; 
margin: 0px;
border-top-width: 0px;

display: grid;
grid-template-areas:
"input cardContainer"
grid-template-rows: 500px 1fr;
grid-template-columns: 500px 1fr;
  `

  export const Option = styled.div`
  width: 350px;
  height: 40px;

  font-size: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  

  margin: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

 
`

export const Card = styled.input`
  width: 350px;
  height: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-radius: 40px;

  font-size: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  

  margin: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

 
`

export const CardContainer = styled.p`
grid area: cardContainer;
width: 100%;
justify-content: right;
margin-bottom: 2px;
margin: 30px;
display: grid;
grid-template-columns: 500px;
grid-column: 3 / 4;
grid-row: 2;

a {
  text-decoration: none;  
  color: #000;
}

  `

  export const end = styled.p`
  grid area: cardContainer;
  width: 100%;
  justify-content: right;
  margin-bottom: 0px;
  margin: 0px;
  display: flex;
  background-color: #dbead5;
  a {
    text-decoration: none;  
    color: #000;
  }
  

  `