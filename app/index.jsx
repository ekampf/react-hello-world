import ReactDOM from 'react-dom'
import React from 'react'

require("bootstrap-webpack");
require('./styles/main.scss');

ReactDOM.render(
  <div className="container">
      <h1>Hello, world!!</h1>
  </div>,
  document.getElementById('app')
);
