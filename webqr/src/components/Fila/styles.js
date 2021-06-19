import React from 'react';
import styled from 'styled-components';

export const Container = styled.p`
  width: 1000px;
  height: 500px;
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 20px;
 
  
  cursor: pointer;
  transition: all 0.3s ease; 
  `

export const FilaPediatra = styled.div`
  width: 1200px;
  height: 40px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-radius: 40px;
  margin: 10px;
  font-size: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b7d5ac;

  margin: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

 
`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #EE6B26;
    font-weight: bold;
  }

  span {
    color: #707070;
  }

`
export const p = styled.div`
display: grid;
  grid-template-columns: 550px 3fr 1fr;
  grid-column: 3 / 7;
  grid-row: 4;


`
export const Content = styled.div `
  width: 100%;
  justify-content: right;
  margin: 0px;
  background-color: white;

  display: grid;
  grid-template-columns: 400px 2fr ;
  grid-column: 3 / 4;
  grid-row: 4;

  a {
    text-decoration: none;  
    color: #000;
  }
`