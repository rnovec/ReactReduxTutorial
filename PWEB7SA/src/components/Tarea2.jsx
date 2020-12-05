import React, { useState } from 'react'

export default function Tarea2 () {
  const [name, setName] = useState('')
  const [list, setList] = useState(['Arturo', 'Bruno', 'Carlos'])

  const onChange = e => {
    setName(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (list.indexOf(name.trim()) === -1) setList([...list, name])
    setName('')
  }
  return (
    <div className='row text-left'>
      <div className='col-md-5'></div>
      <div className='col-md-7'>
        <h1>Invitados a Mi Fiesta</h1>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              id='nombre'
              placeholder='Ingrese un nombre'
              className='form-control'
              type='text'
              value={name}
              onChange={onChange}
              required
            ></input>
          </div>
          <button className='btn btn-primary' type='submit'>
            Agregar Invitado
          </button>

          <ul className='pt-3'>
            {list.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  )
}
