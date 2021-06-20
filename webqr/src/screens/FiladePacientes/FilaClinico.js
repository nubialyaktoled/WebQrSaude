import React, { useState, useEffect } from 'react';
import * as S from '../../components/User/styles';
import fila from '../../assets/fila.png';
import  User  from '../../components/User';
import api from '../../services/api';
import profile from '../../assets/profile-picture.png';
import * as I from '../../components/Text/styles';
import * as F from '../../components/Fila/styles';
import Input from '../../components/Text';

function FilaClinico() {
  
    const [usuarios, setUsuarios] = useState([]);

     useEffect(() =>{
           api.get('/paciente/clinico')
           .then((response) => setUsuarios(response.data))           
        }
      ,[]);
    

return (  

    <div>
        <br/>
           <center><h1><strong> Fila pediatra</strong></h1></center>
        <br/>

            { usuarios.map((user) => (
               <li type= "none">
                <F.Content>
                     <F.FilaPediatra><strong>{user.name}</strong></F.FilaPediatra> 
                </F.Content> </li>))}


  

    </div>
)
}
export default FilaClinico;