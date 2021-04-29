// import Title from './components/00-title/Test';
// import LifeCycle from './components/01-cycle_de_vie/LifeCycle';
// import Card from './components/02-css/Card';
// import Formulaire from './components/03-forms/Formulaire';
// import Etat from './components/04-remonter_etat/Etat';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from './router/routes';
import Navigation from './router/Nav';
import './App.css';

function App() {
  return (
    // <> : Syntaxe Raccourcie de <React.Fragment>
    // BrowserRouter, chargera ici les composants
    <BrowserRouter>
      <Navigation/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;