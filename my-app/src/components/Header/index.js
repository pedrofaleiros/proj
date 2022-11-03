import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <div>
            <header>
                <h2>AAA</h2>

                <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>

                </div>
            </header>
        </div>
    );
}

export default Header;