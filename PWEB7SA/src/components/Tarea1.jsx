import React, { useState } from 'react'

export default function Tarea1 () {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  const onChange = e => {
    setInputValue(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setResult(`${inputValue} mi = ${parseFloat(inputValue) * 1.60934} km`)
    setInputValue('')
  }
  return (
    <div className='row text-left'>
      <div className='col-md-5'></div>
      <div className='col-md-7'>
        <h1>Convertidor de Unidades</h1>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='millas'>Millas</label>
            <input
              id='millas'
              placeholder='Ingrese un numero'
              className='form-control'
              type='text'
              value={inputValue}
              onChange={onChange}
              required
            ></input>
          </div>
          <button className='btn btn-primary' type='submit'>
            Convertir millas a Kilometros
          </button>

          {!!result && (
            <div className='pt-3'>
              <h2>{result}</h2>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
