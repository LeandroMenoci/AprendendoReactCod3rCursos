import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Condicional from './components/basicos/Condicional'
import Repeticao from './components/basicos/Repeticao'
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/comunicacao/form/Input';
import Contador from './components/contador/Contador';

export default props => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#10 Contador" color="#4006ac">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#09 Formulário" color="#18dddd">
        <Input></Input>
      </Card>
      <Card titulo="#08 Comunicação Indireta" color="#dd6718">
        <Super></Super>
      </Card>
      <Card titulo="#07 Comunicação Direta" color="#d626be">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#06 Condicional v1" color="#185588">
        <Condicional numero={11}></Condicional>
      </Card>
      <Card titulo="#05 Condicional v2" color="#0fb82b">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>
      <Card titulo="#04 Repetição" color="#b0b32c">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03 Componente Com Filhos" color="#a840d8">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Danie</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 Componente Com Parametro" color="#b42419">
        <ComParametro titulo="Esse é o titulo"
          subtitulo="Esse é o subtitulo" />
      </Card>

      <Card titulo="#01 Primeiro Componente" color="#39c321">
        <Primeiro />
      </Card>
    </div>

  </div>
);