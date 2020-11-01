import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function AddPersonForm (props) {
  const [person, setPerson] = useState('') // set default value

  function handleChange (e) {
    setPerson(e.target.value) // set new name
  }

  function handleSubmit (e) {
    props.handleSubmit(person) // call parent event
    setPerson('') // empty input
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
  // render array elements using `map` built-in function
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItems}</ul>
}

/**
 * Main component
 */
function ContactManager (props) {
  // share state passing props data
  const [contacts, setContacts] = useState(props.data)

  /**
   * Handle child event and update main array
   * @param {String} name
   */
  function addPerson (name) {
    setContacts([...contacts, name])
  }

  return (
    <div>
      {/* Listen for handleSubmit child event */}
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}

// main array
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

const el = <ContactManager data={contacts} />

ReactDOM.render(el, document.getElementById('root'))
