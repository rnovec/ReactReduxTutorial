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

## Sharing State

Right now, our **AddPersonForm** independently keeps its state. How can we add a new contact to our **PeopleList** then, when the form is submitted?

To accomplish that, we need to share the state between the components. We can do that by **lifting the state up** to a parent component. This means that the parent component will hold the data that needs to be shared between the components. In our case, that is the contacts list.

Let's create a parent component called **ContactManager**, which includes the **AddPersonForm** and **PeopleList** as child components and holds the contacts list in its state:

```js
function ContactManager (props) {
  const [contacts, setContacts] = useState(props.data)

  return (
    <div>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  )
}
```

The **ContactManager** component receives the initial contacts list using props, saves it in its state.
Then it passes down the contacts list to its child component.

> Data can be passed from the parent to the child, but not from the child to the parent. React uses what is called **unidirectional data flow**, in other words, data only flows downward, so to speak.

## Adding a Contact

Now, we can create an **addPerson()** function to our ContactManager component to add a new person to our contacts state array:

```js
function ContactManager (props) {
  const [contacts, setContacts] = useState(props.data)

  function addPerson (name) {
    setContacts([...contacts, name])
  }
  ...
}
```

But how are we going to call this function from our child AddPersonForm component, where the data for the new person is stored?
Just like we passed down data using props, React allows us to pass down function references!

```js
function ContactManager (props) {
  const [contacts, setContacts] = useState(props.data)

  function addPerson (name) {
    setContacts([...contacts, name])
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}
```

Similar to passing the contacts list to our PeopleList component, we passed down the **addPerson()** function to our AddPersonForm using a prop called **handleSubmit**.

Now, our PeopleList can call the **handleSubmit** function that it received when the form is submitted, to add a new person to the list:

```js
function AddPersonForm (props) {
  const [person, setPerson] = useState('')

  function handleChange (e) {
    setPerson(e.target.value)
  }

  function handleSubmit (e) {
    props.handleSubmit(person)
    setPerson('')
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

> We also clear the value of the text field using **setPerson('')** after adding a new person.

## Summary

An important takeaway from this lesson is that **props** can be used to pass down not only state, but also functions, that may manipulate the state.
This way, we are able to store the application state in the parent and allow its child components to use and manipulate the state.

Now, when our app is fully functional, we can add some CSS styles and a check, to prevent creation of blank contacts.

> Explore the project, try to modify the code and add attributes to our contacts, such as age, location, phone number.
