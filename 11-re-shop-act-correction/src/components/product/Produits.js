import React from 'react';
import Produit from './Produit';

class Produits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
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

            ],
            idProduitId: 0,
        }
    }

    setEditProductId(id) {
        this.setState({ idProduitId: id })
    }

    editProductHandler = (id, title, description, price) => {
        const produits = [...this.state.products];
        const newProduit = { id, title, description, price }
        let indexProduit = produits.findIndex(p => p.id === id);
        produits[indexProduit] = newProduit;
        this.setState({
            idProduitId: 0,
            products: produits
        })
    }


    deleteProductHanlder = (id) => {
        const products = [...this.state.products];
        const index = products.findIndex(product => product.id === id);
        products.splice(index, 1);
        this.setState({
            products
        });
    }

    createProduct = (product, index) => {
        // if (product.id === this.state.idProduitId) <Produit ..../>
        // else <EditProduct/>
        const productJsx = (
            <Produit
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                index={index}
                editId={() => this.setEditProductId(product.id)}
                editing={(product.id === this.state.idProduitId)}
                editProduct={this.editProductHandler}
                delete={this.deleteProductHanlder}
            // editing={
            //     (product.id === this.state.idProduitId) ? true : false
            // }
            />

        )
        return productJsx;
    }

    render() {
        return (
            <div className='container'>
                {
                    (this.state.products.length < 1) ?
                        <p>La liste de produit est vide</p>
                        :
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Prix</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(this.createProduct)
                                }
                            </tbody>
                        </table>
                }
            </div>
        );
    }
}

export default Produits;