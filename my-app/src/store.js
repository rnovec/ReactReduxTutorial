/**
 * @author rnovec
 * @email raul.novelo@aaaimx.org
 *
 * This file contains the main store configuration.
 * All inside this file is only needed for the redux library
 */
import { createStore } from 'redux' // required import

// initial state
const initialState = {
  count: 0
}

/**
 * Action creator
 * @param {Number} num value to increment
 */
export function incrementCounter (num) {
  return { type: 'INCREMENT', num }
}

/**
 * Reducer creator
 * @param {*} state initial store's state
 * @param {*} action action to execute
 */
export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      // increment current count value + num received
      return { count: state.count + action.num } // increment counter
    default:
      return state // for unknown actions return state
  }
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

// create store with reducer creator
export const store = createStore(reducer)
