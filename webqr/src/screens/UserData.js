
import React, { useState, useEffect } from 'react';
import * as S from '../components/User/styles';

import fonts from '../styles/fonts';
import  User  from '../components/User';
import api from '../services/api'

function UserData() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');

 async function loadData(){
   

        api.get('/api/users/60b90dda046554001f5baf2f')


            .then(response => {
                setUser(response.data)
            })
    
     .catch (err => {
        console.log(err)
    }
	)

   }


   useEffect(() => {
    loadData();

     }, [loadData])

return (
 

    <div className="Paciente">
    <header className="App-header">
          
      <p>Ganhe mais tempo no seu atendimento e evite filas! {'\n'}</p>


      <p> {'\n'} Cadastre se em nossa plataforma e ganhe mais agilidade no atendimento do seu hospital{'\n'}</p>
            

      <User email={user.email} password={user.password} createdAt={user.createdAt}/>
    
      
      
    </header>

    
  </div>
    

    





)
}

export default UserData;