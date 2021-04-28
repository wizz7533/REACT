
class Aliments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aliments : [
                'Riz',
                'Tomate',
                'Poivron',
                'Oignons'
            ]   
        }
    }
    render() {
        return (
            <div>{
                this.state.aliments.length < 1 ?
                    <p>La liste est vide</p> :
                    <ul>{this.state.aliments.map(aliment => <li key={aliment}> {aliment}</li>)}</ul>
            }
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h2>Liste des aliments</h2>
            <Aliments />

        </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
