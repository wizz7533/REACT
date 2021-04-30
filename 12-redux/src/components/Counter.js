import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <h1>Compteur: </h1>
                <button>Incrementer</button>
            </>
        );
    }
}
export default Counter;