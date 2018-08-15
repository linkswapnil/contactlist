import { combineReducers } from 'redux-loop'
import { routerReducer } from 'react-router-redux'
import contacts from './reducer.contacts'
import main from './reducer.main'

const rootReducer = combineReducers({
  main,
  contacts,
  router: routerReducer,
})

export default rootReducer
