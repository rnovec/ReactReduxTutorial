# Props

Functional components can accept arguments, similar to JavaScript functions. These arguments are called **props**, and represent an object.

For example, we can use **props** in our Hello component:

```js
function Hello (props) {
  return <p>Hello, {props.name}!</p>
}
```

Now, we can add a name attribute to our element:

```js
const el = <Hello name='David' />
```

The attribute value will be passed to the component when rendered.

> An element can have multiple custom attributes, which will be passed to the component using the **props** object. You can use any custom names for your attributes.

## Components using Components

Components can use other components to generate an output.

#### For example:

```js
function App () {
  return (
    <div>
      <Hello name='David' />
      <Hello name='James' />
      <Hello name='Amy' />
    </div>
  )
}
```

Here, our **App** component uses the **Hello** component three times, each times with a new name attribute.

> Generally, it is a good practice to split complex components into multiple smaller components, that are reusable.
> For example, a **Post** component can use an **Avatar** component, an **Image** component, a **Date** component, etc.

## Props in Class Components

Props can be accessed in class components using **this.props**.

#### For example:

```js
class Hello extends React.Component {
  render () {
    return <p>Hello, {this.props.name}!</p>
  }
}
```

An important thing to consider is that props are read-only, meaning components cannot modify their props.

> Interactive apps generally need to change data and the page elements.
> We will learn how to change the output of components using **state** in the next lesson.
