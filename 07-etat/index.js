class Aliments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aliments: [
                'Peche',
                'Pomme'
            ],
            prenom: "",
        }
    }

    getPrenom() {
        return this.state.prenom;
    }

    render() {
        return (
            <React.Fragment>
                <h2>Liste des aliments</h2>
                {
                    (this.state.aliments.length < 1) ?
                        <p>Aucun aliment</p> :
                        <ul>
                            <li>{this.state.aliments[0]}</li>
                        </ul>
                }
                <p>Prenom: {this.getPrenom()}</p>

            </React.Fragment>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Aliments />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);