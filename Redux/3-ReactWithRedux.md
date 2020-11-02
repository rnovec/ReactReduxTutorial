# Redux with React

Now, that we know what Redux is, we can start building React apps that use Redux!

First, we need to install Redux:

**npm install redux**

This will install the Redux library.
However, Redux itself is just a small library, that can be used with different technologies.
To use it with React, we need to install another library, called **react-redux**:

**npm install react-redux**

> The **react-redux** library binds React with Redux, allowing React components to read data from a Redux store, and dispatch actions to the store to update data.

## Counter App

As our first example, let's build the [Counter app]() we made in the previous module using Redux!

First, we need to create our **action** and corresponding **reducer**.

```js
function incrementCounter (num) {
  return {
    type: 'INCREMENT',
    num: num
  }
}
```

The code above declares an action creator function named `incrementCounter()`, which returns an action with type INCREMENT and the corresponding payload.

#### Our reducer:

```js
const initialState = {
  count: 0
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num }
    default:
      return state
  }
}
```

The code above defines a **reducer** function, which returns the new state based on the given action. We increment the **count** state variable by the provided num value.

We also provide a default value for our state using the **initialState** variable.

> Nothing fancy until now, we just created two simple functions, one returning our action object, the other one returning a new state with the incremented count.

## Creating the Store

To create the store, we call the `createStore()` function, which takes the reducer as its parameter:

```js
const store = createStore(reducer)
```

But how do we pass the store to our components?
That is achieved using a special `<Provider>` element. It makes the store available to any nested child component.

So, for our counter, we would have the following:

```js
const el = (
  <Provider store={store}>
    <Counter />
  </Provider>
)
```

**Provider** takes the store as an attribute and makes it available to its child component.

> We need to import { createStore } and { Provider } using the following syntax:

```js
import { Provider } from 'react-redux'
import { createStore } from 'redux'
```

## Connecting to the Store

At this point, we have created our **action**, the **reducer**, the **store**, and made it available to our Counter component using the **Provider** element.

In order to connect our component to the store, we need to call the `connect()` function.
The `connect()` function returns a new component, that wraps the component you passed to it and connects it to the store using its special parameter functions.

```js
function connect(mapStateToProps?, mapDispatchToProps?)
```

connect() takes two optional parameters:

#### mapStateToProps

This function is called every time the store state changes. It receives the state as a parameter and returns the state for the component.
For example, for our Counter, we need to return the **count** state variable:

```js
function mapStateToProps (state) {
  return {
    count: state.count
  }
}
```

Now, our component can access the **count** variable using its **props**! Just as the name of the function states, it maps the state to the props.

#### mapDispatchToProps

As you may have guessed from the name, this parameter is used to map the dispatch functions to props.
It can be a simple object, defining the function that needs to be mapped:

```js
const mapDispatchToProps = {
  incrementCounter
}
```

This might seem a bit confusing, but its very straightforward: **mapStateToProps** simply returns the state variables as props to our component, while **mapDispatchToProps** allows to define how we dispatch actions and make the dispatching functions available as props.

Both are optional, as, for example, your component might only need to read from the store.

> **mapDispatchToProps** can also be defined as a function. Take a look at the [official documentation](https://react-redux.js.org/using-react-redux/connect-mapdispatch) for more details.
> Note, that we need to import the **connect** function: `import { connect } from 'react-redux';`

## Accessing The Store

Inside our component we just access the store properties using **props**:

```js
function Counter (props) {
  function handleClick () {
    props.incrementCounter(1)
  }

  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
```

Notice, that we pass **1** as the argument to our **incrementCounter()**, making our counter increment by 1. We can change the value to any other number, and our counter will behave as expected, because we handled the increment parameter in our reducer.

Now, the only thing left is to call the **connect()** function for our Counter component and render it on the page:

```js
const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)

const el = (
  <Provider store={store}>
    <Counter />
  </Provider>
)
```

Remember, **connect()** returns a new component, which wraps the component it received.

> Now we have a fully functional React+Redux app!
> This might seem too much code for a simple counter app, however this architecture is great when building large scale apps, that use many components, multiple levels of nesting and manage a lot of data.

## Project Structure

In our Counter example, we wrote the whole code in a single source file.
Usually, web apps contain multiple component, reducers and actions.

To make our project more manageable, we can use separate source files (and folders) for components, reducers and actions.

For example, we can move our Counter component and the action creator function to a separate `Counter.js` file.

In order to use the Counter component in our `index.js`, we need to export it first:

```js
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

Notice, we export the connected component.

Now, we can import the component in `index.js`:

```js
import Counter from './Counter'
```

> We use the **ES6 modules system**, which allows use to export and import modules.
