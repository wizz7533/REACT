/** 
 * createElement() prend 3 parametres:
 *   1) le nom de la balise HTML
 *   2) les attributs HTML sous forme d'objet
 *   3) le contenu entre les balises
 * */
const element = React.createElement("h2", {}, "Hello World !");
console.log(element);
// En temps normal, on n'utilise qu'une seule fois la methode
// render car elle ecrase le contenu precedent
ReactDOM.render(element, document.getElementById('root'));

/**
 * <ul>
*       <li>...</li>
 * </ul>
 *  */
const liste = React.createElement(
    "ul", {},
    React.createElement('li', null, "Elephant"),
    React.createElement('li', {id: 'mon-id'}, "Elan"),
    React.createElement('li', {className: 'li-item'}, "Epervier"),
);
ReactDOM.render(liste, document.getElementById('root'));


// Le JSX (Javascript Syntax eXtension)

const listeJsx = (
    <ul>
        <li>Chien</li>
        <li id="nav-li-1">Chat</li>
        <li className="nav-item">Chameau</li>
    </ul>
);

ReactDOM.render(listeJsx, document.getElementById('root'));