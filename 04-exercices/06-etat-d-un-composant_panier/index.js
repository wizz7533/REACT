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

    incrementer(id) {
        console.log(this.state.products);
        const produits = [ ...this.state.products ];
        const index = produits.findIndex(produit => produit.id === id);
        // produits[index].quantity++;
        produits[index].quantity <1 ? produits[index].quantity = produits[index].quantity : produits[index].quantity ++
        this.setState({
            produits
        });
    }

    decrementer(id) {
        console.log(this.state.products);
        const produits = [...this.state.products];
        const index = produits.findIndex(produit => produit.id === id);
        // produits[index].quantity++;
        produits[index].quantity < 2 ? produits[index].quantity = produits[index].quantity : produits[index].quantity --
        this.setState({
            produits
        });
    }

    supprimer(id) {
        console.log(this.state.products);
        const produits = [...this.state.products];
        const index = produits.findIndex(produit => produit.id === id);
        console.log(index);

        // produits[index].quantity++;
        produits.splice(index, 1);
        console.log(produits);
        this.setState({
            products: produits
        })
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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map( products =>
                            <tr key={products.id}>
                                <td>{products.id}</td>
                                <td>{products.title}</td>
                                <td><button className="fas fa-angle-up" onClick={() => this.incrementer(products.id)}></button><span>{products.quantity}</span><button className="fas fa-angle-down" onClick={() => this.decrementer(products.id)}></button></td>
                                <td>{products.price * products.quantity}</td>
                                <td><button className="fas fa-shopping-basket" onClick={() => this.supprimer(products.id)}></button></td>
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