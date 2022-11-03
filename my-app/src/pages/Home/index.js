import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Home() {

  return (
    <div className="container">

    <Link to='/sobre'>Sobre</Link>
    <br/>
    <Link to='/contato'>Contato</Link>


    </div>
  );
}

export default Home;