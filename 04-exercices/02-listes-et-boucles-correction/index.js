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
                    <h2>La liste est vide</h2> :
                    <ul>{createJsxAliments()} </ul>
            }
        </React.Fragment>
    );
}

const products = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    },

    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    }

]


class ProduitsPart2 extends React.Component {
    constructor(props) {
        super(props)
    }

    createProductTableRow(product, index) {
        const element = (
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
            </tr>
        );
        return element;
    }

    render() {
        return (
            <React.Fragment>
                {
                    (products.length < 1) ?
                        <p>La liste de produit est vide</p>
                        :
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(this.createProductTableRow)
                                }
                            </tbody>
                        </table>
                }
            </React.Fragment>
        );
    }
}


function Produit(props) {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
        </tr>
    );
}

class ProduitsPart3 extends React.Component {
    constructor(props) {
        super(props)
    }

    createProduct(product, index) {
        const productJsx = (
            <Produit
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                index={index}
            />
        )
        return productJsx;
    }
    render() {
        return (
            <React.Fragment>
                {
                    (products.length < 1) ?
                        <p>La liste de produit est vide</p>
                        :
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(this.createProduct)
                                }
                            </tbody>
                        </table>
                }
            </React.Fragment>
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
                <Aliments />
                <ProduitsPart2 />
                <h2>Composant Enfant</h2>
                <ProduitsPart3 />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);