import React, { Component } from 'react';

export default props =>
  <div>
    <h2>Os Filhos:</h2>
    <div>
      {props.children}
    </div>
  </div>