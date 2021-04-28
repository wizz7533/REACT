class Personne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom: ''
        };
        this.changerPrenom = this.changerPrenom.bind(this);
    }

    changerPrenom(event) {
        const prenom = event.target.value;
        this.setState({ prenom });
    }

    render() {
        return (
            <React.Fragment>
                <p>Prenom: {this.state.prenom}</p>
                <input
                    type="text"
                    placeholder="ex: Maude"
                    onChange={this.changerPrenom} />
            </React.Fragment>
        );
    }
}

function App() {
    return (
        <React.Fragment>
            <Personne />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));