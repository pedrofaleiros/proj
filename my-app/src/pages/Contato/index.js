import { Link } from 'react-router-dom';

function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <br />
            <Link to='/'>Home</Link>
            <br />
            <Link to='/sobre'>Sobre</Link>
            <br />
            <Link to='/produto/12345'>Produto 12345</Link>
        </div>

    );
}

export default Contato;