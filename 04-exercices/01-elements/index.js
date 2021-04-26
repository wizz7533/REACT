const element = React.createElement("div", {},
    React.createElement("title", null, "The Dog"),
    React.createElement("p", null, "Real Dogs run and fly"),
    React.createElement("img", { src: "./images/dog.jpg", width:"300px", alt:"The Dog"}),
    
);
console.log(element);
// En temps normal, on n'utilise qu'une seule fois la methode
// render car elle ecrase le contenu precedent
ReactDOM.render(element, document.getElementById('app'));