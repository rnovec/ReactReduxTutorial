# Contact Manager

Now, that we know how to create components, pass them data using props and manage their data using state, let's start building our **Contact Manager**.

Our **Contact Manager** will allow to view the list of contacts and add new ones to the list.

![Contact Manager](https://api.sololearn.com/DownloadFile?id=4390)
By looking at the mockup, it makes sense to have two components:

- **AddPersonForm**: a form with the text field and Add button.
- **PeopleList**: a list of contacts.

Let's create these components.
**AddPersonForm** uses state to manage the value of the text field:

```js
function AddPersonForm () {
  const [person, setPerson] = useState('')

  function handleChange (e) {
    setPerson(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
  }
  return (
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
```

For now, we just prevent the default behavior when the form is submitted.

**PeopleList** received an array representing the contacts and renders a list on the page:

```js
function PeopleList (props) {
  const arr = props.data
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItems}</ul>
}
```

Now we can render our components on the page and include some initial data:

```js
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

const el = (
  <div>
    <AddPersonForm />
    <PeopleList data={contacts} />
  </div>
)
```

> Adding a new contact does not work, as we have not built the logic in the **handleSubmit** function yet.
