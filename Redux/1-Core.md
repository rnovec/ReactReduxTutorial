# Store

Let's look into the core concepts of Redux.

In Redux, the application's state is stored as a simple object, called **store**.
There should only be a single store in an app.

For example, a store can look like this:

```js
{
  contacts: [{
    name: 'David'
  }, {
    name: 'Amy'
  }],
  toggle: true
}
```

> You cannot change the state directly. Instead, you need to **dispatch an action**.

## Actions & Reducers

An **action** is just a plain JavaScript object:

```js
{
  type: 'ADD_CONTACT',
  name: 'James'
}
```

The code above defines an action with **type** ADD_CONTACT and a **name** property.

An action clearly describes why the state change happened, and can be dispatched from anywhere in your app.

At this point we just have a store, which includes our state data and an object, that includes some data that needs to be changed in the state. So, how do we actually do the change?
To tie the store and the action together, we need to write a function, called a **reducer**.
It takes state and action as arguments, and returns the next state of the app.

#### For example:

```js
function contactsApp (state, action) {
  if (action.type === 'ADD_CONTACT') {
    return [...state, action.name]
  } else {
    return state
  }
}
```

The code above defines a simple reducer function, that checks the action and returns the new state.

These concepts are basically the idea of Redux: you hold the global state in a **store**, define actions to describe what to change in the **store** and write **reducer** functions to handle those actions.

> Notice, we have not touched any React specific syntax, all of the above is plain JavaScript.

## Core Concepts

Redux can be described using the following principles:

### Single source of truth

The global state of the app is stored in a single **store**.

### State is read-only

You can change the state only by dispatching **actions**. Action are objects, that contain information about what should be changed.

### Pure reducers

Reducers are functions that handle the actions and return the next state of the application. Reducers need to be **pure**, meaning they cannot modify the state, they need to return a new state object.

> Let's dive into these concepts and create real React apps that use Redux!
