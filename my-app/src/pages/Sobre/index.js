import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Sobre() {

  return (
    <div className="container">
      <h1>Sobre</h1>
      <br />
      <Link to='/'>Home</Link>
      <br />
      <Link to='/contato'>Contato</Link>


    </div>
  );
}

export default Sobre;