import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()

        }
    }

    render() {
        return (
            <>
                <p>
                    Nous sommes le {this.state.date.toLocaleDateString()}
                </p>
            </>
        );
    }
}

export default LifeCycle;