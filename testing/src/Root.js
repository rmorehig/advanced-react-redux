import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

const store = createStore(reducers, {})

export default ({ children }) => <Provider store={store}>{children}</Provider>
