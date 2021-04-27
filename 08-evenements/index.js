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
                <p>Lorsque onClick va appeler la fonction afficherNomFechee, le this sera le bon.
                Car afficherNomFechee utilise une fonction fléchée sur la fonction onClick
                </p>
                <button onClick={this.afficherNomFlechee}>Garde le contexte</button>
                <br/>
                <button onClick={this.afficherNomBinding}>Garde le contexte</button>
            </div>
        );
    }
}

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
                <ThisReference/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);