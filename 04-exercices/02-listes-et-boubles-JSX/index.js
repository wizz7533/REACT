const aliments = [
    "Riz",
    "Tomates",
    "Poivrons",
    "Oignons"
];

const produits = [
    {
        "id": "1",
        "title": "Riz",
        "description": "Céréale",
        "price": "2€"
    },
    {
        "id": "2",
        "title": "Tomates",
        "description": "Solanacée Charnue",
        "price": "2€"
    },
    {
        "id": "3",
        "title": "Poivrons",
        "description": "Solanacée doux",
        "price": "2€"
    },
    {
        "id": "4",
        "title": "Oignons",
        "description": "Herbacée Potagère",
        "price": "2€"
    }     
]


function Aliments() {
    return aliments.length <1 ? <p>La liste est vide</p> : aliments.map(function (aliment, index) {
        return (<li key={index}>{aliment}</li>)
    })   
}

class Produits extends React.Component {
    constructor(props) {
        super(props);
    }
    createProductTableRow(produits, index) {
        const element = (  
            <tr key={produits.id}>
                <td>{produits.title}</td>
                <td>{produits.description}</td>
                <td>{produits.price}</td>
            </tr>
        );
        return element;
    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {
                (produits.length < 1) ?
                <p>La liste est vide</p> :
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produits.map(this.createProductTableRow)
                        }
                    </tbody>
                </table>
                }
            </React.Fragment>
        );
            }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Liste des aliments</h2>
                <ul>
                    <Aliments/>
                </ul>
                <Produits/>
           </React.Fragment> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
