function Produit(props) {
    const { title, description, price } = props;
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td contentEditable="true">{title}</td>
            <td contentEditable="true">{description}</td>
            <td contentEditable="true">{price}</td>
            <td>
                <button className="btn btn-dark">Modifier</button>
                <button className="btn btn-danger">Supprimer</button>
            </td>
        </tr>
    );
}

export default Produit;