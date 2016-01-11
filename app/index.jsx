import ReactDOM from 'react-dom'
import React from 'react'
import Icon from 'react-fa'

require('./styles/main.scss');

ReactDOM.render(
  <section>
    <aside>What is it about?</aside>
    <article>Neat is an open source semantic grid framework built on top of Sass and Bourbon…</article>
  </section>,
  document.getElementById('app')
);
