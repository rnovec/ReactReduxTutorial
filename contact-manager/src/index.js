import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // required import
import { store } from './store' // store imports
import ContactManager from './components/ContactManager'
import './index.css'

const el = (
  <Provider store={store}>
    <ContactManager />
  </Provider>
)
ReactDOM.render(el, document.getElementById('root'))
