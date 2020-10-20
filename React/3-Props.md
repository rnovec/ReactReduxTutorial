# Props

Functional components can accept arguments, similar to JavaScript functions. These arguments are called **props**, and represent an object.

For example, we can use **props** in our Hello component:

```js
function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}
```

Now, we can add a name attribute to our element:

```js
const el = <Hello name="David" />; 
```

The attribute value will be passed to the component when rendered.

> An element can have multiple custom attributes, which will be passed to the component using the **props** object. You can use any custom names for your attributes.