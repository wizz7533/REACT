import React from 'react';
import { Route } from 'react-router-dom';
import Title from '../components/00-title/Test';
import LifeCycle from '../components/01-cycle_de_vie/LifeCycle';
import Card from '../components/02-css/Card';
import Formulaire from '../components/03-formulaire/Formulaire';
import Etat from '../components/04-remonter_etat/Etat';


function Routes(props) {
    return (
        <React.Fragment>
            <Route exact path="/" component={Title} />
            <Route exact path="/life-cycle" component={LifeCycle} />
            <Route exact path="/card" component={Card} />
            <Route exact path="/forms" component={Formulaire} />
            <Route exact path="/etat" component={Etat}/>
        </React.Fragment>
    );
}
export default Routes;