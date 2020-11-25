import React, { FormEvent, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/excluir.css'

const Excluir: React.FC = () =>  {
  const [id, setID] = useState('');

  function handleSubmit(event: FormEvent) {
    api.delete(`/funcionarios/${id}`)
    
    alert('Excluido com sucesso !')
  }

    return (
        <>
        
        <header className="cabeca"></header>
  
          <div id="page-excluir">
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

                  <button id="excluirEnviar" type="submit" ><AiFillDelete/></button>
                </form>

                </div>

                <Link to="/">
                    <button id='criar'>Criar</button>
                </Link>

                <Link to="/Detalhe">
                    <button id='detalhe'>Detalhes</button>
                </Link>

                <Link to="/Alterar">
                    <button id='alterar'>Alterar</button>
                </Link>
               {/*  <Link to="/Excluir">
                    <button id='excluir'>Excluir</button>
                </Link> */}
              </main>
  
            </div>
          </div>
        </>   
      );
  }

export default Excluir;