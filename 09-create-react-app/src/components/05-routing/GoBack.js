import React from 'react';

function GoBack(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Retour</h1>
            <button onClick={props.history.goBack}>Retour</button>
            <button onClick={() => { props.history.push('/') }}>Acceuil</button>
        </div>
    );
}

export default GoBack;