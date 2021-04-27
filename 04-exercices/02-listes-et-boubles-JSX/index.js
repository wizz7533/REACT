const aliments = [
    "Riz",
    "Tomates",
    "Poivrons",
    "Oignons"
];

const produits = [
    {
        "title": "Riz",
        "description": "Céréale",
        "price": "2€"
    },
    {
        "title": "Tomates",
        "description": "Solanacée Charnue",
        "price": "2€"
    },
    {
        "title": "Poivrons",
        "description": "Solanacée doux",
        "price": "2€"
    },
    {
        "title": "Oignons",
        "description": "Herbacée Potagère",
        "price": "2€"
    }     
]


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
