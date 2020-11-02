import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux' // required import
import { store, mapStateToProps, mapDispatchToProps } from './store' // store imports
import './style.css'

function Counter (props) {
  function handleClick () {
    props.incrementCounter(1) // call to parent event
  }
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

// connect function allows combining React+Redux
// creating a new component connected to store
const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter)

// use Provider to inject store to main component
const el = (
  <Provider store={store}>
    <CounterApp />
  </Provider>
)

ReactDOM.render(el, document.getElementById('root'))
