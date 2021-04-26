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



function Banner() {
    return (
        <header>
            <h1>ReShopAct</h1>
            <i class="fas fa-shopping-cart"></i>
            <span>0</span>
        </header>
    );
};

const containerElt = React.createElement(
    "div",
    {},
    titleElt,
    imgElt,
    pElt,
    <Banner />
);


ReactDOM.render(
    containerElt,
    document.getElementById("root")
);