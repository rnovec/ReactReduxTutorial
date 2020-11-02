# Actions

**Action** can be viewed as payloads of information that send data to the store.
Actions are represented by simple JavaScript object and need to have a type property:

```js
{
  type: 'ADD_CONTACT',
  name: 'James'
}
```

In the example above, we define an action with the type **ADD_CONTACT** and provide it a **name** property as its payload.

> Notice that for the **type** we're using all uppercase letters and words separated by underscores. This is also called "_snake case_". This is the generally accepted way to create an **action type**.
> You can use any naming and structure for the other properties defining the data in the action.

You can, for instance, call it payload, and provide it an object with the data:

```js
{
    type: 'ADD_CONTACT',
    payload: {
        name: "Jimmy Barnes"
    }
 }
```

> You should pass as little data in each action as possible. That keeps the actions clean and easy to read.

## Action Creators

In order to use the same action with different payloads, as well as create reusable code, we can create **Action creators**.

**Action creators** are simple functions that return actions.

For example:

```js
function addContact (person) {
  return {
    type: 'ADD_CONTACT',
    payload: person
  }
}
```

The action creator function takes a **person** parameter and uses that as the actions payload.
Now, we can use the action creator to create multiple new contacts by passing it the corresponding data.

> Action creators are not built into the Redux library by default. It is a pattern that was implemented to create code that reflects a more DRY (Don't Repeat Yourself) approach.

# Reducer Function

**Reducers** are functions that handle the actions.
The function takes the current state and the action as its parameters and returns the new state.

A reducer can handle multiple actions, so usually it includes a **switch** statement for each action case.

For example:

```js
function contactsApp (state, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.person]
    default:
      return state
  }
}
```

In the code above, our reducer function uses a **switch** statement to handle the appropriate actions.
As the **default** case, it just returns the current state.

Remember, the reducer has to be a **pure** function, meaning it cannot modify the current state. It has to return a new state object instead.

> The **default** case is added for handling unknown actions.


## Multiple Reducers

If you have more than one entity (i.e. users, products, invoices, orders, etc.), it's typically a good idea to break them into multiple reducer functions to separate concerns.

Redux gives us a method that we can use called `combineReducers`. This allows us to use more than one reducer so that when an action gets dispatched, the action would get run through all of the reducers instead of only one. It also allows us to separate the concerns of our store state.

For example:

```js
const contactsApp = combineReducers({
  addContacts,
  doSomething
})
```

Now, our **contactsApp** is combining two reducers into one.
> It's a good practice to provide each reducer only the part of the state that it needs to manage. This is called **reducer composition**, and is a fundamental pattern of building Redux apps.
