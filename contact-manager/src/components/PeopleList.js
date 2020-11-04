import { connect } from 'react-redux'
import { mapStateToProps } from '../store'
import { removeContact, editContact } from '../store/actions'

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
  removeContact,
  editContact
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
