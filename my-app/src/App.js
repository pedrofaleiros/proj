import { useEffect, useState } from 'react';
import './style.css'

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {

      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
        .then((result) => {
          return result.json()
        })
        .then((data) => {
          console.log(data);
          setNutri(data);
        })

    }

    loadApi();

  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img className='capa' src={item.capa} />
            <p className='subtitulo'>
              {item.subtitulo}
            </p>

            <a className='botao'>Acessar</a>
          </article>
        );
      })}

    </div>
  );
}

export default App;
