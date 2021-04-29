import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/life-cycle">Cycle de vie</NavLink></li>
                <li><NavLink to="/card">Le CSS</NavLink></li>
                <li><NavLink to="/etat">Changer l'etat</NavLink></li>
                <li><NavLink to="/forms">Formulaire</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;