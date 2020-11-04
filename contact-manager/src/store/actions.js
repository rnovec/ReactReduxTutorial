/**
 * Action creator
 * @param {String} contact name to add
 */
export function addContact (contact) {
  return { type: 'ADD_CONTACT', contact }
}

/**
 * Action creator
 * @param {String} name name to remove
 */
export function removeContact (name) {
  return { type: 'REMOVE_CONTACT', name }
}

/**
 * Action creator
 * @param {String} oldName name to change
 * @param {String} newName new name
 */
export function editContact (oldName, newName) {
  return {
    type: 'EDIT_CONTACT',
    payload: {
      oldName,
      newName
    }
  }
}
