import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/alterar.css'

const Alterar: React.FC = () => {
  const [id, setID] = useState('')
  const [name, setName] = useState('');
  const [functions, setFunctions] = useState('');
  const [departament, setDepartament] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [fotos, setFotos] = useState<File>();
  const [inputError, setInputError] = useState('');

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];
      
      setFotos(selectedImage);
     
    }
  }, []);
  

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    if (name !== '') {
      data.append('name', name);
    }
    if (functions !== '') {
      data.append('functions', functions);
    }
    if (departament !== '') {
      data.append('departament', departament);
    }
    if (email !== '') {
      data.append('email', departament);
    }
    if (telefone !== '') {
    data.append('telefone', telefone);
    }
    if (fotos) {
    data.append('fotos', fotos);
    }
    try {
      await api.put(`funcionarios/${id}`, data);

    alert('Funcionario alterado com sucesso !')
    } catch (error) {
      setInputError('teste')
    }
    
  }

    return (
        <>
        <header className="cabeca"></header>
  
          <div id="page-alterar">
            <div className="content-wrapper">
  
              <main>
                <div>
                
                <form  onSubmit={handleSubmit}>
                      
                      <label htmlFor="id">ID</label>
                        <input
                          id="id"
                          value={id}
                          onChange={event => setID(event.target.value)} 
                        />

                        <label htmlFor="name">Nome</label>
                        <input
                          id="name"
                          value={name}
                          onChange={event => setName(event.target.value)} 
                          />

                        <label htmlFor="functions">Função</label>
                        <input
                          id="functions"
                          value={functions}
                          onChange={event => setFunctions(event.target.value)} 
                          />

                        <label htmlFor="departament">Departamento</label>
                        <input
                          id="departament"
                          value={departament}
                          onChange={event => setDepartament(event.target.value)} 
                          />

                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          value={email}
                          onChange={event => setEmail(event.target.value)} 
                          />

                        <label htmlFor="telefone">Telefone</label>
                        <input
                          id="telefone"
                          value={telefone}
                          onChange={event => setTelefone(event.target.value)} 
                          />

                        <label htmlFor="fotos">
                        <FcAddImage size={80} />
                        <input
                          type="file"
                          id="fotos"
                          onChange={handleAvatarChange}
                        />
                      </label>
                    <button id='salvar' type="submit">Alterar</button>
                  </form>
                </div>

                <Link to="/">
                    <button id='criar'>Criar</button>
                </Link>

                <Link to="/Detalhe">
                    <button id='detalhe'>Detalhes</button>
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

export default Alterar;