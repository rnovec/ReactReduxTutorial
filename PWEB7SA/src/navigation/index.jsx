import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Tabla, Car, Tarea1, Tarea2 } from '../components'
import Layout from './Layout'

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
           <Route path='/assigment1'>
            <Tarea1 />
          </Route>
          <Route path='/assigment2'>
            <Tarea2 />
          </Route>
          <Route path='/table'>
            <Tabla />
          </Route>
          <Route path='/cars'>
            <Car />
          </Route>
          <Route path='/'>
            <Car />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes
