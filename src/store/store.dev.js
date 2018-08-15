import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { install } from 'redux-loop'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'

export const history = createHistory()

export default function configureStore(initialState = {}) {
  const middleware = routerMiddleware(history)
  const composeEnhancers = composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  })
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(middleware), install()))
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
