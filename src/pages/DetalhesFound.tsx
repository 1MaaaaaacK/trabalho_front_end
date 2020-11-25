import React, { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { textChangeRangeIsUnchanged } from 'typescript';
import api from '../services/api';

import '../styles/pages/detalhesFound.css'

interface Params {
  id: string;
}

interface Func {
  name: string;
  functions: string;
  departament: string;
  email: string;
  telefone: string;
  curtir: number;
  fotos: string;
}

const DetalhesFound: React.FC = () =>  {
  const history = useHistory();
  const { params } = useRouteMatch<Params>();
  const [funcionario, setFuncionario] = useState<Func>();
  const [curtir, setCurtir] = useState('');

  useEffect(() => {
    api.get(`/funcionarios/${params.id}`).then((response) => {
      
      setFuncionario(response.data);
   
    })
  }, [params.id, funcionario]);


  
    return (
        <>
        <header className="cabeca"></header>
  
          <div id="page-detalhesFound">
            <div className="content-wrapper">
  
              <main>
                <div>
                    <img src={funcionario?.fotos} alt="foto" />

                    <p>Nome</p>
                    <strong>{funcionario?.name}</strong>

                    <p>Departamento</p>
                    <strong>{funcionario?.departament}</strong>

                    <p>Email</p>
                    <strong>{funcionario?.email}</strong>

                    <p>Telefone</p>
                    <strong>{funcionario?.telefone}</strong>

                    <p>Likes</p>
                    <strong>{funcionario?.curtir}</strong>
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

                <button id="like" 
                onClick={() => {
                  api.put(`/funcionarios/${params.id}/curtir`);
                    }}> 
                <BiLike />
                </button>
                <button id="Deslike" onClick={() => {
                  api.put(`/funcionarios/${params.id}/descurtir`).then((response) => 
                  {response.data.message ? alert(response.data.message) : console.log('')}
                )
                  }}> 
                <BiDislike />
                </button>
                
              </main>
  
            </div>
          </div>
        </>   
      );
  }

export default DetalhesFound;