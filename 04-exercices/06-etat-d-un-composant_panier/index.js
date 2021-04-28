class Panier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Pomme',
                    quantity: 1,
                    price: 1.0
                },
                {
                    id: 2,
                    title: 'Poire',
                    quantity: 2,
                    price: 2.0
                },
                {
                    id: 3,
                    title: 'Orange',
                    quantity: 3,
                    price: 2.5
                }
            ]
        };

    }



    render() {
        return (
            this.state.products.length < 1 ?
                <p>Le panier est vide</p> :
                // <ul>{this.state.products.map(produit => <li key={produit.id}>{produit.title}</li>)}</ul>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map( products =>
                            <tr key={products.id}>
                                <td>{products.id}</td>
                                <td>{products.title}</td>
                                <td>{products.quantity}</td>
                                <td>{products.price * products.quantity}</td>
                            </tr>                       
                        )
                        }
                    </tbody>
                </table>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Panier/>

            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));