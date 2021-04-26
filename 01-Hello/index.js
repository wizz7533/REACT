/**
 * createElement() prend 3 parametres:
 *   1) le nom de la balise HTML
 *   2) les attributs HTML sous forme d'objet
 *   3) le texte entre les balises
 * */
const element = React.createElement("h2", {}, "Hello World !");
console.log(element);

/*
* On utilise une seule fois ReactDOM.render une seule fois par projet, car il va écraser cequ'il y avait précédemment
*/
ReactDOM.render(element, document.getElementById('root'));
