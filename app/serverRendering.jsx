import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'

import reducer from './reducer'
import App from './App'
import template from './template'

export default function(req, res) {
  const store = createStore(reducer)
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const preloadedState = store.getState()
  res.send(template(html, preloadedState))
}

