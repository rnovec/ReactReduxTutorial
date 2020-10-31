import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Tabla from './Tabla'
import Car from './Car'

/**
 * Componente principal
 */
function App () {
  const [number, setNumber] = useState(1)
  function increment () {
    setNumber(number + 1)
  }
  return (
    <div>
      <h2>Tabla del {number}</h2>
      <button onClick={increment}>Increment</button>
      <Tabla num={number} />
    </div>
  )
}

// Se instacia el elemento principal
// let el = <Car />
let el = <App />

// Se renederiza el contenido en el DOM
ReactDOM.render(el, document.getElementById('root'))
