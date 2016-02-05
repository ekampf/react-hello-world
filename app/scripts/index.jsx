import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import React from 'react'
import Icon from 'react-fa'

import App from './containers/App'
import configure from './store'

require('../styles/main.scss');

const store = configure()

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
