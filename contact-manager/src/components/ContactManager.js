import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'

function ContactManager () {
  return (
    <div className='container'>
      <h1>Contact Manager</h1>
      <AddPersonForm />
      <PeopleList />
    </div>
  )
}

export default ContactManager
