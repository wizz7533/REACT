class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: "",
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

    render() {
        return (
            <React.Fragment>
                <p>Prenom</p>
                {/* Attention, on ne met pas les parentheses car on ne souhaite pas exécuter la fonction mais la transmettre */}
                <button onClick={this.direBonjour}>Clique ici</button>
                <input type="text" placeholder="Saisir un Nom" onChange={this.afficherSaisie}></input>
                <button onClick={(evenement) => this.afficherEventEtNombre(evenement, 50) }>Afficher Event</button>
            </React.Fragment>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Person />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);