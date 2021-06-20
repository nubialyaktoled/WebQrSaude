import React, { useState, useEffect } from 'react';
import * as S from '../../components/User/styles';
import fila from '../../assets/fila.png';
import cores from '../../assets/cores.png';
import  User  from '../../components/User';
import api from '../../services/api';
import profile from '../../assets/profile-picture.png';
import * as I from '../../components/Text/styles';
import Input from '../../components/Text';
import './App.css';

function Paciente() {
  
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');
    const [bla, setBla] = useState('');
    const [ox, setOx] = useState('');
    const [pa, setPa] = useState('');
    const [type, setType] = useState('');
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');
    const [filatype, setFilatype] = useState('');

 async function loadData(){
   
        api.get('/users/luizamaria@gmail.com')

            .then(response => {
                setUser(response.data)
               
            })
    
     .catch (err => {
        console.log(err)
    }
	)
   }

async function putData(){
   
    try {
        const response = await api.post('api/paciente', 
            {
                "id": user.id,
                "name": user.name,
                "dateNasc": user.dateNasc,
                "password": "pass",
                "tel": user.tel,
                "email": user.email,
                "temperature": temperature,
                "ox": ox,
                "description": description,
                "type": "bttreipo",
                "filatype": filatype,
                "pa": pa,

            })

    } catch (err) {
        console.log(err)
    }
}


   useEffect(() => {
    loadData();

     }, [])

return (
 

<div className="Paciente">
              
    <S.Content>    
            <User name = {user.name} dateNasc={user.dateNasc} cpf={user.cpf} cns={user.cns}/>
    </S.Content>   
    
    <I.Container>
         <I.Input input name="description" placeholder="Descrição" onChange={e=>setDescription(e.target.value)} />
         <I.CardContainer>
            <I.Card input name="temperature" placeholder="Temperatura" onChange={e=>setTemperature(e.target.value)} />
            <I.Card input name="ox" placeholder="OX" onChange={e=>setOx(e.target.value)} />
            <I.Card input name="pa" placeholder="PA" onChange={e=>setPa(e.target.value)} />      

            <I.Option>
              <p>selecione a área de atendimento:</p>
              <div class="select-estiloso">
               <select value={filatype} onChange={e=>setFilatype(e.target.value)}>
               <option value="null">-</option>
                <option value="ortopedia">ortopedia</option>
                <option value="pediatra">pediatra</option>
                <option value="clinico">clinico</option>
                <option value="grave">grave</option>
              </select>
             </div>
            </I.Option>
            <I.Option> 
               <button onClick={putData} >
                    Adicionar dados 
                </button>
                 
            </I.Option>
         </I.CardContainer>
     </I.Container>

    
      <I.end><img src={cores} width="450" height="100"/></I.end>
      
  </div>
    

    





)
}

export default Paciente;