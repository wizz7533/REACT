import './Produit.css';

// A debuger
function Produit(props) {
    let { id, index, title, description, price } = props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td contentEditable={props.editing}>{title}</td>
            <td contentEditable={props.editing}>{description}</td>
            <td contentEditable={props.editing}>{price}</td>
            <td>
                {
                    (props.editing) ?
                        (
                            <button onClick={() => props.editProduct(id, title, description, price)} className="btn btn-success">
                                Enregistrer
                            </button>
                        ) :
                        (
                            <>
                                <button onClick={props.editId} className="btn btn-dark">
                                    Modifier
                            </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={
                                        () => props.delete(props.id)
                                    }>
                                    Supprimer
                            </button>
                            </>
                        )
                }
            </td>
        </tr>
    );
}

export default Produit;