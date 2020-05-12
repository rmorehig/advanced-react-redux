import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers'
import asyncMiddleware from 'middlewares/async'
import stateValidatorMiddleware from 'middlewares/stateValidator'
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddleware, stateValidatorMiddleware)
  )
  return <Provider store={store}>{children}</Provider>
}
