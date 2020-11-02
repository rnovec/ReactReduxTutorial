import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function AddPersonForm (props) {
  const [person, setPerson] = useState('') // set default value

  function handleChange (e) {
    setPerson(e.target.value) // set new name
  }

  function handleSubmit (e) {
    // if person is not null
    if (person !== '') {
      props.handleSubmit(person) // call parent event
      setPerson('') // empty input
    }

    e.preventDefault() // avoid page reload
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
 * People component to render a list of names
 * @param {Array} data
 */
function PeopleList (props) {
  const arr = props.data
  const iconDelete = 'del-button mdi mdi-trash-can-outline'
  const iconEdit = 'del-button mdi mdi-pencil-outline'

  function handleDelete (person) {
    props.handleDelete(person) // call parent event
  }

  // render array elements using `map` built-in function
  const listItems = arr.map((name, index) => (
    <li key={index}>
      {name} &nbsp;{' '}
      <i className={iconDelete} onClick={() => handleDelete(name)}></i>{' '}
      <i className={iconEdit}></i>
    </li>
  ))
  return <ul>{listItems}</ul>
}

/**
 * Main component
 */
function ContactManager (props) {
  // share state passing props data
  let [contacts, setContacts] = useState(props.data)

  /**
   * Handle child event and update main array
   * @param {String} name
   */
  function addPerson (name) {
    setContacts([...contacts, name])
  }

  function deletePerson (name) {
    let array = [...contacts] // create a copy of array
    let index = array.indexOf(name) // find element by name
    if (index !== -1) {
      array.splice(index, 1) // delete item
      setContacts([...array]) // update state
    }
  }

  return (
    <div className='container'>
      <h1>Contact Manager</h1>
      {/* Listen for handleSubmit child event */}
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} handleDelete={deletePerson} />
    </div>
  )
}

// main array
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

const el = <ContactManager data={contacts} />

ReactDOM.render(el, document.getElementById('root'))
