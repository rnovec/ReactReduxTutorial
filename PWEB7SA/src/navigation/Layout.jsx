import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  const nav = () => (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary fixed-top'>
      <Link to='/' className='navbar-brand'>
        Inicio
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExampleDefault'
        aria-controls='navbarsExampleDefault'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/signup' className='nav-link'>
              Registro
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/table' className='nav-link'>
              Tabla
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/car' className='nav-link'>
              Car
            </Link>
          </li>

          <li className='nav-item active'>
            <Link to='/assigment1' className='nav-link'>
              Tarea1
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/assigment2' className='nav-link'>
              Tarea2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
  return (
    <Fragment>
      {nav()}
      <main className='container'>{children}</main>
    </Fragment>
  )
}

export default Layout
