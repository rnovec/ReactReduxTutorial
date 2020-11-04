import { connect } from 'react-redux'
import { mapStateToProps } from '../store'

/**
 * People component to render a list of names
 * @param {Array} data
 */
function PeopleList (props) {
  const iconDelete = 'del-button mdi mdi-trash-can-outline'
  const iconEdit = 'del-button mdi mdi-pencil-outline'

  function handleDelete (person) {
    props.removeContact(person) // call to store action
  }

  function handleEdit (oldName) {
    const newName = prompt(`Enter the new name for ${oldName}:`)
    if (newName.trim()) props.editContact(oldName, newName) // call to store action
  }

  // render array elements using `map` built-in function
  // and acces to store contacts array
  const listItems = props.contacts.map((name, index) => (
    <li key={index}>
      {name} &nbsp; {/* send custom params to function */}
      <i className={iconDelete} onClick={() => handleDelete(name)}></i>{' '}
      <i className={iconEdit} onClick={() => handleEdit(name)}></i>
    </li>
  ))
  return <ul>{listItems}</ul>
}

/**
 * Actions mapped
 */
export const mapDispatchToProps = {
  /**
   * Action creator
   * @param {String} name name to remove
   */
  removeContact (name) {
    return { type: 'REMOVE_CONTACT', name }
  },

  /**
   * Action creator
   * @param {String} oldName name to change
   * @param {String} newName new name 
   */
  editContact (oldName, newName) {
    return {
      type: 'EDIT_CONTACT',
      payload: {
        oldName,
        newName
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
