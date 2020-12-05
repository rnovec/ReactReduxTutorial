
/**
 * @author Raul Novelo
 * @date 30/10/2020
 */

import React from 'react'

class Car extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964
    }
  }
  // Handling OnClik event
  incrementYear = () => {
    this.setState({ year: this.state.year + 1 })
  }
  render () {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button onClick={this.incrementYear}>Increment year</button>
      </div>
    )
  }
}

export default Car