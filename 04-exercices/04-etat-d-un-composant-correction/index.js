class Aliments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aliments: [
                'Peche',
                'Pomme',
                'Poire',
                'Abricot',
            ]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.aliments.length < 1 ?
                        <p>Aucun Aliment</p>
                        :
                        <ul>{this.state.aliments.map(a => <li key={a}>{a}</li>)}</ul>
                }
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Liste Aliments</h1>
                <Aliments />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))