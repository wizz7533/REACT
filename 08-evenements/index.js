class ThisReference extends React.Component {
    constructor(props) {
        super(props);
        this.nom = "Doe";
        this.afficherNomBinding = this.afficherNomBinding.bind(this);
    }
 
    afficherNom() {
        console.log(this);
    }

    afficherNomFlechee = () => {
        console.log(this.nom);
    }

    afficherNomBinding() {
        console.log(this.nom);

    }

    render() {
        return (
            <div>
                <p>Lorsque onClick va appeler la fonction afficherNom, le this ne sera pas le bon.
                 Car afficherNom est appelé depuis l'intérieur la fonction onClick
                </p>
                <button onClick={this.afficherNom}>Perte de contexte</button>
                <br/>
                <p>Lorsque onClick va appeler la fonction afficherNomFechee, le this sera le bon.
                Car afficherNomFechee utilise une fonction fléchée sur la fonction onClick
                </p>
                <button onClick={this.afficherNomFlechee}>Garde le contexte (méthode 1)</button>
                <br />
                <p>Lorsque onClick va appeler la fonction afficherNomBinding, le this sera le bon.
                Car afficherNomBinding utilise une fonction sur la fonction onClick mais avec le bon contexte.
                </p>
                <button onClick={this.afficherNomBinding}>Garde le contexte (méthode 2)</button>
            </div>
        );
    }
}

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: "",
            utilisateur: {
                id: 0,
                nom: ''
            }
        }
    }

    direBonjour() {
        console.log("Hello !");
    }

    afficherSaisie(event) {
        const recherche = event.target.value;
        console.log("Recherche : ", recherche);
    }

    afficherEventEtNombre(event, nombre) {
        console.log(event);
        console.log(nombre);
    }

    changerPrenom = () => {
        console.log(this.state.prenom);
        /** Il ne faut jamais modifier le state directement */
        // this.state.prenom = "John";
        this.setState({
            prenom: 'John'
        });
    }

    changerNomUtilisateur = () => {
        // on récupère l'utilisateur
        const newUtilisateur = { ...this.utilisateur };
        // on modifie les propriétés qu'on veut
        newUtilisateur.id = 5;
        newUtilisateur.prenom = 'Maude';
        // on modifie le state
        this.setState({ utilisateur: newUtilisateur })
        
        /** Il ne faut pas faire, car setState peut êre asynchrone et attendre un peu
         * avant de mettre à jour le state pour des question de performance
         */
        //this.setState({ utilisateur: this.state.utilisateur })

        this.setState((oldState) => {
            utilisateur: oldState.utilisateur
        });

        this.setState({
            utilisateur: newUtilisateur,
            prenom: newUtilisateur.nom
        });
    }

    render() {
        return (
            <React.Fragment>
                <p>Prenom</p>
                {/* Attention, on ne met pas les parentheses car on ne souhaite pas exécuter la fonction mais la transmettre */}
                <button onClick={this.direBonjour}>Clique ici</button>
                <input type="text" placeholder="Saisir un Nom" onChange={this.afficherSaisie}></input>
                <button onClick={(evenement) => this.afficherEventEtNombre(evenement, 50)}>Afficher Event</button>
                <p>Prénom: {this.state.prenom}</p>
                <button onClick={this.changerPrenom}>Changer le prenom</button>
                <button onClick={this.changerNomUtilisateur}>Changer l'utilisateur'</button>
            </React.Fragment>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Person />
                <ThisReference/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);