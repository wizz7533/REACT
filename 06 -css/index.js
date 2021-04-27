function Bouton(props) {
    const styleCss = `btn ${props.typeCss}`;
    return (
        <button className={styleCss}>
            Clique ici
        </button>
    );
}

class App extends React.Component {
    render() {
        const styleCss = {
            fontSize: '20px',
            color: 'red'
        }
        return (
            <React.Fragment>
                <h1 style={styleCss}>Hello !</h1>
                <div style={{ width: '200px' }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla suscipit totam, veniam architecto dolorum, maiores sequi eius soluta quibusdam perspiciatis aspernatur exercitationem! Labore, cumque. Doloribus quas accusamus porro quam?</p>
                </div>
                <Bouton typeCss="red" />
                <Bouton typeCss="green" />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);