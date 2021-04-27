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

    render() {
        return (
            <React.Fragment>
                <p>Prenom</p>
                <button onClick={this.direBonjour}>Clique ici</button>
                <input type="text" placeholder="Saisir un Nom" onChange={this.afficherSaisie}></input>
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