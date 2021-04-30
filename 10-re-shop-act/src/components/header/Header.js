import './Header.css';

function Header(props) {
    return (
        <header className="App-header">
            <h1>ReShopAct</h1>
            <i class="fas fa-shopping-cart"></i>
            <span>0</span>
        </header>
    );
}

export default Header;