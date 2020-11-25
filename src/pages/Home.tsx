import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FcAddImage } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/home.css'

interface Func {
  id: string;
}

const Home: React.FC = () => {
  const history = useHistory();
  
  const [name, setName] = useState('');
  const [functions, setFunctions] = useState('');
  const [departament, setDepartament] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [fotos, setFotos] = useState<File>();
  const [funcionario, setFuncionario] = useState<Func>()

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];

      setFotos(selectedImage);
    }
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('functions', functions);
    data.append('departament', departament);
    data.append('email', email);
    data.append('telefone', telefone);

    if (fotos) {
    data.append('fotos', fotos);
    }

    const data1 = await api.post('funcionarios', data).then((response) => 
      history.push(`/funcionario/${response.data.funcionario.id}`)
    )

    alert('Funcionario cadastrado com sucesso')
}

    return (
        <>
        <header className="cabeca"></header>
        
          <div id="page-home">
            <div className="content-wrapper">
  
              <main>
                <div>
                  <form onSubmit={handleSubmit}>
                      
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
                    <button id='salvar' type="submit">Criar</button>
                  </form>
                </div>

               {/*  <Link to="/">
                    <button id='criar'>Criar</button>
                </Link> */}

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

export default Home;