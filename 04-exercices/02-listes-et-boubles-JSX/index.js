const aliments = [
    "Riz",
    "Tomates",
    "Poivrons",
    "Oignons"
];

function Aliments() {
    return aliments.length <= 0 ? <p>La liste est vide</p> : aliments.map(function (aliment, index) {
        return (<li key={index}>{aliment}</li>)
    })   
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Liste des aliments</h2>
                <ul>
                    <Aliments/>
                </ul>
           </React.Fragment> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
