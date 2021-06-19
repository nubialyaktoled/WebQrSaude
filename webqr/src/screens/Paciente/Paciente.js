import React, { useState, useEffect } from 'react';
import * as S from '../../components/User/styles';
import fila from '../../assets/fila.png';
import  User  from '../../components/User';
import api from '../../services/api';
import profile from '../../assets/profile-picture.png';
import * as I from '../../components/Text/styles';
import Input from '../../components/Text';

function Paciente() {
  
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');
    const [bla, setBla] = useState('');
    const [ox, setOx] = useState('');
    const [pa, setPa] = useState('');
    const [type, setType] = useState('');
    const [temperature, setTemperature] = useState('');

 async function loadData(){
   

        api.get('/users/deivid.rosariodrr@gmail.com')


            .then(response => {
                setUser(response.data)
            })
    
     .catch (err => {
        console.log(err)
    }
	)

   }

async function postData(){
   
    try {
        const response = await api.put('/users/60b90dda046554001f5baf2f',
            {
                "temperature": temperature,
                "ox": ox,
                "pa": pa,
                "type": type
            })

    } catch (err) {
        console.log(err)
    }
}


   useEffect(() => {
    loadData();

     }, [loadData])

return (
 

<div className="Paciente">
              
    <S.Content>    
            <User name = {user.name} email={user.email} password='nub' createdAt={user.createdAt}/>
    </S.Content>   
    
    <I.Container>
         <I.Input placeholder="Descrição" placeholderTextColor="green" />
         <I.CardContainer>
            <I.Card placeholder="Temperature" placeholderTextColor="green" />
            <I.Card placeholder="OX" placeholderTextColor="green" />
            <I.Card placeholder="Type" placeholderTextColor="green" />
         </I.CardContainer>
     </I.Container>

     
     <input type = "checkbox" id = "subscribeNews" nome = "subscribe" value = "newsletter"></input>

    
  </div>
    

    





)
}

export default Paciente;