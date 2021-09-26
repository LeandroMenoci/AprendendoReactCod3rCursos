import React from 'react';

export default (props) => {
  return (
    <div>
      <label for="passoInput">Passo: </label>
      <input id="passoInput" type="number" style={{ fontSize: '1.4rem', width: '60px' }}
        value={props.passo}
        onChange={e => props.onPassoChange(+e.target.value)} />
    </div>
  )
}