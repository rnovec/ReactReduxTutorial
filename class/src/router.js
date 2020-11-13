import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tabla from './Tabla'
import Car from './Car'

export default function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/table'>Tabla de Multiplicar</Link>
            </li>
            <li>
              <Link to='/cars'>Ejemplo carros</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/table'>
            <Tabla />
          </Route>
          <Route path='/cars'>
            <Car />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home () {
  return <h2>Home</h2>
}
