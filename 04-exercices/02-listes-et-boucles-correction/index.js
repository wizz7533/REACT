const aliments = [
    'Peche',
    'Pomme',
    'Poire',
    'Abricot',
]


function Aliments() {

    const createJsxAliments = function () {
        const jsxAliment = aliments.map(aliment => <li key={aliment}>{aliment}</li>)
        return jsxAliment;
    }

    return (
        <React.Fragment>
            {
                (aliments.length < 1) ?
                    <h2>La list est vide</h2> :
                    <ul>{createJsxAliments()} </ul>
            }
        </React.Fragment>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
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
    document.getElementById("root")
);
