import React from 'react';

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: ''
        };
    }
    onChangeHandler = (event) => {
        this.setState({nom: event.target.value})
    }
    render() {
        return (
            <>
                <h1>Les Formulaires</h1>
                <p>Prenom: {this.state.nom}</p>
                <form>
                    <div className="form-group">
                        <label>Nom</label>
                        <input className="form-control" type="text" value={this.state.nom} onChange= {this.onChangeHandler} />
                    </div>
                </form>
                </>
        );
    }
}
                
export default Formulaire;
