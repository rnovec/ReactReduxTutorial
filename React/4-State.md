# State

Up until this point, we have learned how to pass data to components using **props**.

Many web apps need their components to change their data, for example, after user interaction (clicking a button, submitting a form, etc.).
However, **props** cannot be changed.

In order to allow components to manage and change their data, React provides a feature called state.
State is an object that is added as a property in class components.

For example:

```js
class Hello extends React.Component {
  state = {
    name: "James"
  }

  render() {
    return <h1>Hello {this.state.name}.</h1>;
  }
}
```

As you can see, **state** is just a simple object, that contains key:value pairs.
Similar to props, the values can be accessed using **this.state**.

Now, when the component renders, the state is initialized with the given value and there will be a heading that says "Hello James.".

> The **state** object can contain multiple key:value pairs, separated by commas.

## Changing State
State should not be modified directly. Instead, React provides a **setState()** method, that can be used to modify state.

```js
this.setState({ 
  name: "James",
  age: 25
}); 
```
You need to pass an object with the new key:value pairs to the **setState** method.

Why should we use **setState**, instead of simply changing the values of the object properties directly?
The answer uncovers one of the most useful features of React: when **setState** is called, React automatically re-renders the affected component with the new state!

Usually, the change in state happens in event handlers. We will look at an example in the next part!

> When state changes using the setState method, React gets informed and immediately re-renders the component with the updated state.

## Counter App
To better understand how state works, let's create a counter app, which increments the counter each time a button is clicked.
We start by creating our Counter component, which includes the counter and a button:

```js
class Counter extends React.Component {
  state = {
    counter: 0
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button>Increment</button>
    </div>;
  }
}  
```
We have initialized our **counter** to the value 0 in the state.

Now, we need to add a click event handler to the button and increment the counter in the state.
Here is the final code:

```js
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
     counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
```
The `onClick` event calls the **increment** function of our component, which uses **setState** to change the value of our counter. When the state is changed, React automatically triggers a re-render of the component.

> Notice that the event handler uses camelCase syntax and that the handler function is passed in curly braces.
> We will cover event handlers in more detail in the next lessons.

## Props vs State
As a recap, here is a summary of the main differences between **props** and **state**:

- We use **props** to pass data to components.
- Components use **state** to manage their data.
- Props are read-only and cannot be modified.
- State can be modified by its component using the **setState()** method.
- The **setState()** method results in re-rendering the component affected.

> Components that have state are called stateful, while components that do not use state are called stateless.
