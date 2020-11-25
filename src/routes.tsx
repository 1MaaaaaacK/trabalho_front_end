import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detalhe from './pages/Detalhe'
import Alterar from './pages/Alterar'
import Excluir from './pages/Excluir'
import DetalheFound from './pages/DetalhesFound'


function Routes() {
    return (
     <BrowserRouter>
     <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalhe" component={Detalhe} />
        <Route path='/alterar' component={Alterar} />
        <Route path='/excluir' component={Excluir} />
        <Route path='/funcionario/:id' component={DetalheFound} />

    </Switch>
     </BrowserRouter>
    );
}

export default Routes;