import React from 'react';

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: ''
        };
    }

    // onChangeNomHandler = (event) => {
    //     this.setState({ nom: event.target.value })
    // }

    // onChangePrenomHandler = (event) => {
    //     this.setState({ prenom: event.target.value })
    // }

    onChangeHandler = (event) => {
        const nomDuChamps = event.target.name;
        const valeur = event.target.value;
        this.setState({ [nomDuChamps]: valeur })
    }

    render() {
        return (
            <div className="container">
                <h1>Les formulaires</h1>
                <p>Nom {this.state.nom}</p>
                <p>Prenom {this.state.prenom}</p>
                <p>Age {this.state.age} ans</p>
                <br/>
                <form className="w-50 m-auto">
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                            className="form-control"
                            type="text"
                            name= "nom"
                            value={this.state.nom}
                            onChange={this.onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="prenom">Prénom</label>
                        <input
                            className="form-control"
                            type="text"
                            name= "prenom"
                            value={this.state.prenom}
                            onChange={this.onChangeHandler} />

                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name= "email"
                            value={this.state.email}
                            onChange={this.onChangeHandler} />

                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input
                            className="form-control"
                            type="text"
                            name="age"
                            value={this.state.age}
                            onChange={this.onChangeHandler} />

                    </div>
                </form>
            </div>
        );
    }
}
export default Formulaire;