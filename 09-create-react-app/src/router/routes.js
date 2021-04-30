import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Title from '../components/00-title/Test';
import LifeCycle from '../components/01-cycle_de_vie/LifeCycle';
import Card from '../components/02-css/Card';
import Formulaire from '../components/03-formulaire/Formulaire'
import Etat from '../components/04-remonter_etat/Etat';
import GoBack from '../components/05-routing/GoBack';
import NotFound from '../components/05-routing/NotFound';
import Params from '../components/05-routing/Params';
import Utilisateurs from '../components/05-routing/Utilisateurs';



function Routes(props) {
    return (
        <Switch>
            {/* Sans l'attribut Exact, si l'url correspond a deux ..<Route>...</Route>, les deux composants seront chargés */}
            <Route exact path="/" component={Title} />
            <Route exact path="/life-cycle" component={LifeCycle} />
            <Route exact path="/card" component={Card} />
            <Route exact path="/forms" component={Formulaire} />
            <Route exact path="/etat" component={Etat} />
            <Route exact path="/param/:id" component={Params} />
            <Route exact path="/users" component={Utilisateurs} />
            {/* <Route exact path="/users/detail/:id" component={(props) => { return <UtilisateursDetail {...props}} /> */}
            <Route exact path="/back" component={GoBack} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
export default Routes;