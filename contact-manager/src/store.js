/**
 * @author rnovec
 * @email raul.novelo@aaaimx.org
 *
 * This file contains the main store configuration.
 */
import { createStore } from 'redux' // required import
import update from 'react-addons-update'

// initial state
const initialState = {
  contacts: ['James Smith', 'Thomas Anderson', 'Bruce Wayne']
}

/**
 * Reducer creator
 * @param {*} state initial store's state
 * @param {*} action contains type and payload data
 */
export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.contact]
      }
    case 'REMOVE_CONTACT':
      return {
        contacts: state.contacts.filter(c => c !== action.name)
      }
    case 'EDIT_CONTACT':
      const { oldName, newName } = action.payload
      const index = state.contacts.indexOf(oldName)

      // https://es.reactjs.org/docs/update.html
      return update(state, {
        contacts: {
          [index]: {
            $set: newName
          }
        }
      })
    default:
      return state // for unknown actions return state
  }
}

/**
 * Map state with component props
 * @param {*} state
 */
export const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  }
}

// create store with reducer creator
export const store = createStore(reducer)
