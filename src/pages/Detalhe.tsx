import React, { FormEvent, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';

import '../styles/pages/detalhe.css'

function Detalhe() {
  const history = useHistory();
  const [id, setID] = useState('');
  

  function handleSubmit(event: FormEvent) {
    history.push(`/funcionario/${id}`)
  }
    return (
        <>
        
        <header className="cabeca"></header>
  
          <div id="page-detalhe">
            <div className="content-wrapper">
  
              <main>
                <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID </label>
                  <input
                    id="id"
                    value={id}
                    onChange={event => setID(event.target.value)} 
                  />

                  <button id="detalheEnviar" type="submit" ><FcSearch /></button>
                </form>


                </div>

                <Link to="/">
                    <button id='criar'>Criar</button>
                </Link>

                <Link to="/Alterar">
                    <button id='alterar'>Alterar</button>
                </Link>

                <Link to="/Excluir">
                    <button id='excluir'>Excluir</button>
                </Link>         
              </main>
  
            </div>
          </div>
        </>   
      );
  }

export default Detalhe;