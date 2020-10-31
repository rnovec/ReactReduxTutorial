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

## The useEffect Hook

The lifecycle methods we covered are only available for class components.
However, React provides a special Hook called useEffect to make lifecycle methods available in functional components. It combines the componentDidMount, componentDidUpdate, and componentWillUnmount methods into one.

For example, we can achieve the behavior of our last example using a functional Counter component:

```js
function Counter () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    alert('Number of clicks: ' + counter)
  })

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

When you run the code, you'll notice that the alert dialog appears also during the first render. This is caused by the fact that, by default, **useEffect** runs both, after the first render and after every update.

To call the method only when something changes, we can provide it a second argument:

```js
useEffect(() => {
  //do something
}, [count])
```

## Event Handling

Handling events in **React** is very similar to handling events in the DOM.

The only difference is that event names use camelCase syntax and the event handler needs to be passed in curly braces.

#### For example, to handle the click event on a button:

```js
<button onClick={handleClick}>My Button</button>
```

Clicking the button will call the `handleClick` function of the component.

#### Let's explore our Counter app:

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

The `onClick` event calls the **increment** function, which is incrementing the counter state v

> Check out the same Counter app built using a class component [here](https://stackblitz.com/edit/react-state-counter-example?file=index.js).

## Handling User Input

One of the common ways that users interact with web pages is through text fields.

We can handle user input in React using the `onChange` event of the text field.
When the value of the text field changes, the event handler is called, updating the value of the field in the component's state.
This way you always have the actual value of the text field in the state.

Let's make an app to convert Km to Miles. We will take the Km value from a text field and calculate the miles value upon input:

```js
function Converter () {
  const [km, setKm] = useState(0)

  function handleChange (e) {
    setKm(e.target.value)
  }
  function convert (km) {
    return (km / 1.609).toFixed(2)
  }

  return (
    <div>
      <input type='text' value={km} onChange={handleChange} />

      <p>
        {' '}
        {km} km is {convert(km)} miles{' '}
      </p>
    </div>
  )
}
```

Our Converter component includes a text field, which calls the `handleChange` function when its value changes.
The handleChange function updates the state with the current value of the textfield, causing the component to re-render and show the corresponding miles value, which is calculated using the **convert** function.

> The value of the text field is accessed via the e object, which represents the React event. It is passed to the event handler function as an argument and can be used to access the event object.

