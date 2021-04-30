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
            idProduitEdit: 0
        }
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

    setEditProduitId(id) {
        console.log(id);
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