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

// create store with reducer creator
export const store = createStore(reducer)
