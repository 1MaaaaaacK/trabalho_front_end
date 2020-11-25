import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/detalhesFound.css'

function Detalhe() {
    return (
        <>
        
        <header className="cabeca"></header>
  
          <div id="page-detalhesCriado">
            <div className="content-wrapper">
  
              <main>
                <div>
                    <p>Nome</p>
                    <strong>Nome do Funcionario</strong>

                    <p>Departamento</p>
                    <strong>Nome do Departamento</strong>

                    <p>Email</p>
                    <strong>email.funcionario@gmail.com</strong>

                    <p>Telefone</p>
                    <strong>Numero Funcionario</strong>

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