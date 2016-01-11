import ReactDOM from 'react-dom'
import React from 'react'
import Icon from 'react-fa'

require('./styles/main.scss');

ReactDOM.render(
  <div>
      <h1>Hello, world!</h1>
      <Icon spin name="spinner" />
  </div>,
  document.getElementById('app')
);
