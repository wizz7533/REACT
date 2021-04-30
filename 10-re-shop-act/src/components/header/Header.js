import './Header.css';

function Header(props) {
    return (
        <header className="App-header">
            <h1>ReShopAct</h1>
            <i className="fas fa-shopping-cart"></i>
            <span>0</span>
        </header>
    );
}

export default Header;