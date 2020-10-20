# What is JSX?

In the previous module we used the following code to show an output using React:

```js
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);
```

Let's start to break down the code and understand each part of it.
We will start with the `<h1>Hello, React!</h1>` element.

As you can see, the element is not in quotes to represent a string. It's like an HTML element, however we use it right in the JavaScript code!
This is called **JSX**, and it is a syntax extension to JavaScript. It allows us to build UI elements right in the JavaScript code!

> React does not require using JSX, however, it is common practice in the React community to use JSX as it eases the development of user interfaces, as well as allows React to show useful error and warning messages.


## Intro to JSX

Let's have a look at our code again:
```js
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);
```
The code calls React's **render** method, and passes it two arguments, a JSX element and a container. The **render** method displays the provided element in the container, which, in our case, is the HTML element with **id="root"**.

> When you call the **render** method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.

## Expressions in JSX

We can use any JavaScript expression inside JSX using curly braces.

#### For example:

```js
const name = "David";
const el = <p>Hello, {name}</p>;

ReactDOM.render(
  el,
  document.getElementById('root')
); 
```
[Try it on StackBlitz](https://stackblitz.com/edit/react-jsx-expressions-example?file=index.js)
In the example above, we use the variable **name** in the **JSX** element.

> As you can see, JSX can be used just like JavaScript expressions. You can assign a JSX expression to a variable, return it from a function, etc.

## Attributes in JSX

We can specify attributes using quotes, just like in HTML:

```html
<div id="name"></div>
```

When using a JavaScript expression as the attributes value, the quotes should not be used:
```html
<div id={user.id}></div> 
```

> React DOM uses **camelCase** property naming convention instead of HTML attribute names.
> For example, **class** becomes **className** in JSX.