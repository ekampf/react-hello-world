import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <div>
      <h1>Hello, world!</h1>
      <img src={require('./images/before.png')} />
  </div>,
  document.getElementById('app')
);
