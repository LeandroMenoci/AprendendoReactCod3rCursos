import './App.css'
import React from 'react';

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components//layout/Card'

export default props => (
  <div className="App">
    <Card titulo="Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Danie</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="Componente Com Parametro">
      <ComParametro titulo="Esse é o titulo"
        subtitulo="Esse é o subtitulo" />
    </Card>

    <Card titulo="Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);