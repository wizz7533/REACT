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
        // for (const item of prenoms.entries()) {
        //     const index = item[0];
        //     const prenom = item[1];
        //     const jsxLi = (<li key={index}>{prenom}</li>);
        //     userJSXElements.push(jsxLi);
        // }
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
                <h3>Syntaxe raccourcie</h3>
                <ul>
                    {
                        prenoms.map(
                            (prenom, index) => <li key={index}>{prenom}</li>
                        )
                    }
                </ul>
                <h2>Afficher une liste seulement si elle n'est pas vide</h2>
                {

                }
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);