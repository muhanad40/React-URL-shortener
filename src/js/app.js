require("babel-polyfill")

import App from './components/App'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

// store.subscribe(() =>
//     console.log(store.getState())
// )

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('url-shortener-app')
)
