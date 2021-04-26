/**
 * <mon-header message="">
 *    ffdf
 * </mon-header>
 *  */

/**
 * Pour que la fonction soit un composant, il faut qu'elle
 * retourne du jsx (ou un element React)
 */
function Product() {
    return (<p>Produit</p>);
}

function ProductName(props) {
    console.log(props);
    // console.log(props.nom);
    return (<p>Produit: { props.nom}</p>);
}

class PersonName extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <p>Personne: {this.props.nom}</p>
    }
}

ReactDOM.render(
    <div>
        <Product />
        <ProductName nom="Fleurs" />
        <ProductName nom="Terre" />
        <PersonName nom="Jerry" />
    </div>,
    document.getElementById('root')
);