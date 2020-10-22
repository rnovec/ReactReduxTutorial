# Hooks

Earlier version of React allowed to use state only with class components.
In recent iterations of React, a new feature called **hooks** was introduced, allowing to use state inside of functional components.

First, we need to import the **useState** hook:

```js
import React, { useState } from 'react'
```

**useState** returns a pair, the current state value and a function, that lets you change the state.
**useState** takes one argument, which is the initial value of the state.

Let's look at an example:

```js
function Hello () {
  const [name, setName] = useState('David')

  return <h1>Hello {name}.</h1>
}
```

## Counter App using Hooks

Now we can rewrite our Counter app from the previous lesson using a functional component and hooks!

Here is the code:

```js
function Counter () {
  const [counter, setCounter] = useState(0)

  function increment () {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
```

As you can see, compared to the class component, the code is much shorter and easier to read and understand. That was one of the reasons why the React team created Hooks.

> Remember, hooks can only be used inside functional components.
> Hooks are functions that allow to "hook into" React features from function components.

## Lifecycle Methods

React provides special lifecycle methods for class components, which are called when components are mounted, updated or unmounted.

**Mounting** is the process when a component is rendered on the page.
**Unmounting** is the process when a component is removed from the page.

The **componentDidMount** method is called when a component is rendered on the page.

For example, we can use **componentDidMount** in our Counter app to set the initial value of the counter:

```js
componentDidMount() {
    this.setState({counter: 42});
}
```

This will set an initial value of the counter when the component is rendered.

**componentDidMount** is typically used for populating the state inside of a component when it initially mounts to the DOM.

Similarly, the `componentWillUnmount()` lifecycle method is called right before the component is removed from the **DOM**. It can be used to free up resources taken by the component.

## componentDidUpdate

> Another lifecycle method is `componentDidUpdate()`, which is called when a component is updated in the [DOM]().

We can, for example, alert the current counter value when it is incremented:

```js
componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
}
```
> **componentDidUpdate()** is only called when the component is updated.
