import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // required import
import { store } from './store' // store imports
import Counter from './Counter'
import './style.css'

// use Provider to inject store to main component
const el = (
  <Provider store={store}>
    <Counter />
  </Provider>
)

ReactDOM.render(el, document.getElementById('root'))
