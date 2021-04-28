class Panier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produits: [
                { id: 1, title: 'Lorem', quantity: 6, price: 10.0 },
                { id: 2, title: 'Ipsum', quantity: 2, price: 42.5 },
                { id: 3, title: 'Dolor', quantity: 1, price: 39.99 },
                { id: 4, title: 'Donec', quantity: 7, price: 72.68 },
            ]
        };
    }
    createProductTableRow(produit, index) {
        const element = (
            <tr key={produit.id}>
                <td>{index + 1}</td>
                <td>{produit.title}</td>
                <td>
                    <button>+</button>
                    {produit.quantity}
                    <button>-</button>
                </td>
                <td>{produit.price}</td>
                <td>
                    <button>Supprimer le produit</button>
                </td>
            </tr>
        );
        return element;
    }

    incrementer() {
    }

    decrementer() {
        if (produit.quantity < 0) {
            return;
        }

    }

    render() {
        return (
            <React.Fragment>
                {
                    (this.state.produits.length < 1) ?
                        <p>La liste de produit est vide</p>
                        :
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Prix</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.produits.map(this.createProductTableRow)
                                }
                            </tbody>
                        </table>
                }
            </React.Fragment>
        );
    }
}

function App() {
    return (
        <React.Fragment>
            <Panier />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));