import React from 'react';

function Params(props) {
    const id = props.match.params.id;
    return (
        <React.Fragment>
            <h2>Voici votre id: {id}</h2>
        </React.Fragment>
    );
}
export default Params;