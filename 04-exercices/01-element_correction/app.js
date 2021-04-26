const titleElt = React.createElement(
    "h1",
    {},
    "Hello !"
);

// imgElt
const imgElt = React.createElement(
    "img",
    { src: "./images/dog.jpg", width: "300px", alt: "The Dog" }
);

// pElt
const pElt = React.createElement(
    "p",
    {},
    "Real Dogs run and fly"
);

const containerElt = React.createElement(
    "div",
    {},
    titleElt,
    imgElt,
    pElt
)




ReactDOM.render(
    containerElt,
    document.getElementById("root")
);