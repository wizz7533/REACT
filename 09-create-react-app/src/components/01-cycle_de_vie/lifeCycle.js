import React, { Component, Fragment } from 'react';

function FormatDate(props) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return props.date.toLocaleDateString('fr-FR', options);
}

class LifeCycle extends Component {
    constructor(props) {
        console.log("1.Composant Construit");
        super(props);
        this.state = {
            date: new Date()

        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("4.Composant Update");
        console.log("Previous Props: ", prevProps);
        console.log("Previous State: ", prevState);
    }
    
    componentDidMount() {
        console.log("3.Composant Monté");
        this.timer = setInterval(() => {
            const NewDate = new Date();
            this.setState({ date: NewDate })
        }, 1000);
        console.log(this.timer);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        console.log("2.Composant Rendu");
        return (
            <>
                <p>
                    Nous sommes le &nbsp;
                    <FormatDate date={this.state.date} />
                </p>
                <p>Temps de connection : {this.state.date.toLocaleTimeString()}</p>
            </>
        );
    }
}

export default LifeCycle;