import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home';
import PrimeiroContato from './screens/PrimeiroContato';
import Paciente from './screens/Paciente/Paciente';
import UserData from './screens/UserData';
import FilaPediatra from './screens/FiladePacientes/FilaPediatra';
import FilaClinico from './screens/FiladePacientes/FilaClinico';
import FilaOrtopedista from './screens/FiladePacientes/FilaOrtopedista';
import FilaEmergencia from './screens/FiladePacientes/FilaEmergencia';
import Login from './screens/Login/Login';


ReactDOM.render(
  <Router>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/PrimeiroContato" component={PrimeiroContato} />
            <Route path="/Paciente" component={Paciente} />
            <Route path="/UserData" component={UserData} />
            <Route path="/FilaPediatra" component={FilaPediatra} />
            <Route path="/FilaClinico" component={FilaClinico} />
            <Route path="/FilaOrtopedista" component={FilaOrtopedista} />
            <Route path="/FilaEmergencia" component={FilaEmergencia} />
            <Route path="/Login" component={Login} />
        </Switch>
    </Router>
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
