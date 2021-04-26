const prenoms = [
    "Rick",
    "Morty",
    "Summer",
    "Jerry",
    "Beth"
];

class App extends React.Component {

    createUserArrayElt() {
        const userJSXElements = [];

        /***
         * React a besoin d'identifier de maniere uniques nos differentes balises   * <li></li> pour mieux s'adapter lorsque les elements de la liste changent
         */
        for (const [index, prenom] of prenoms.entries()) {
            const jsxLi = (<li key={index}>{prenom}</li>);
            userJSXElements.push(jsxLi);
        }
        return userJSXElements;
    }

    render() {
        return (
            <React.Fragment>
                <h2>Liste des utilisateurs</h2>
                <ul>
                    {this.createUserArrayElt()}
                </ul>
                <h3>Avec la methode map</h3>
                <ul>
                    {
                        prenoms.map(function (prenom, index) {
                            return (<li key={index}>{prenom}</li>)
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);