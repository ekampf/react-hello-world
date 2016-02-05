import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import todos from './todos'

// export default combineReducers({
//   { routing: routeReducer },
//   todos
// })

export default combineReducers(Object.assign({}, {
    todos: todos,
    routing: routeReducer
}))
