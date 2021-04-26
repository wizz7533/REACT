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

function BannerImg(props) {
    return (
        <header>
            <h2>{props.children}</h2>
            <img src={props.imgSrc} width="300px" alt=""/>
            <p>{props.message}</p>
        </header>
    );
};

let lienImg = './images/dog.jpg';

const containerElt = React.createElement(
    "div",
    {},
    titleElt,
    imgElt,
    pElt,
    <Banner />,
    <BannerImg imgSrc={lienImg} message="Real Dog runs and flies">HAHA !!</BannerImg>
);


ReactDOM.render(
    containerElt,
    document.getElementById("root")
);