import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import rootReducer from '../reducers'

export default function configure(initialState) {
    const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
    const reduxRouterMiddleware = syncHistory(browserHistory)
    const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(create)

    const store = createStoreWithMiddleware(rootReducer, initialState)

    reduxRouterMiddleware.listenForReplays(store)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
