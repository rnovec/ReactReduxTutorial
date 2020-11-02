import React from 'react'
import { connect } from 'react-redux'

function Counter (props) {
  function handleClick () {
    props.incrementCounter(1)
  }
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

/**
 * Action creator
 * @param {Number} num value to increment
 */
export function incrementCounter (num) {
  return { type: 'INCREMENT', num }
}

/**
 * Map state with component props
 * @param {*} state
 */
export function mapStateToProps (state) {
  return {
    count: state.count
  }
}

/**
 * Actions mapped
 */
export const mapDispatchToProps = {
  incrementCounter
}

// connect function allows combining React+Redux
// creating a new component connected to store
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
