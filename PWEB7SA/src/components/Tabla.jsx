import React, { useState } from 'react'

/**
 * Componente de Tabla de Multiplicar
 * recibe por medio de sus props un numero
 * @param {Number} nums
 */
function Tabla (props) {
  // Podemos usar una lista de numeros
  // para renderizar multiples elementos
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return numbers.map((number, index) => (
    <table border='1' key={index}>
      <tr>
        <th>Multiplicar</th> <th>Resultado</th>
      </tr>
      <tr>
        <td>
          {/* Primera columna de operacion */}
          {props.num} x {number}
        </td>
        {/* Segunda columna de resultado */}
        <td>{props.num * number}</td>
      </tr>
    </table>
  ))
}

/**
 * Componente principal
 */
function App () {
  const [number, setNumber] = useState(1)

  function handleChange(e) {
    console.log(typeof e.target.value)
    const number = parseInt(e.target.value)
    setNumber(number)
    e.preventDefault()
  }

  // function increment (e) {
  //   setNumber(number)
  //   e.preventDefault()
  // }
  return (
    <div>
      <h2>Tabla del {number}</h2>
      <input
        name='number'
        type='number'
        defaultValue='1'
        min='1'
        onChange={handleChange}
      ></input>
      {/* <button onClick={increment}>Increment</button> */}
      <br/>
      <Tabla num={number} />
    </div>
  )
}

export default App
