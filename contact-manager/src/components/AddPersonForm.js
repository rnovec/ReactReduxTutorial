import { useState } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../store'
import { addContact } from '../store/actions'

function AddPersonForm (props) {
  const [person, setPerson] = useState('') // set default value

  function handleChange (e) {
    setPerson(e.target.value) // set new name
  }

  function handleSubmit (e) {
    if (person.trim()) {
      let index = props.contacts.indexOf(person)
      if (index === -1) props.addContact(person)
      // call to store action
      else alert('Contact already exists!')
      setPerson('') // empty input
    }
    // avoid page reload
    e.preventDefault()
  }
  return (
    // Form handling
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add new contact'
        onChange={handleChange}
        value={person}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

/**
 * Actions mapped
 */
export const mapDispatchToProps = {
  addContact
}

// connect function allows combining React+Redux
// creating a new component connected to store
export default connect(mapStateToProps, mapDispatchToProps)(AddPersonForm)
