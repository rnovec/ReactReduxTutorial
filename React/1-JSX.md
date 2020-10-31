# What is JSX?

In the previous module we used the following code to show an output using React:

```js
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('root'))
```

Let's start to break down the code and understand each part of it.
We will start with the `<h1>Hello, React!</h1>` element.

As you can see, the element is not in quotes to represent a string. It's like an HTML element, however we use it right in the JavaScript code!
This is called **JSX**, and it is a syntax extension to JavaScript. It allows us to build UI elements right in the JavaScript code!

> React does not require using JSX, however, it is common practice in the React community to use JSX as it eases the development of user interfaces, as well as allows React to show useful error and warning messages.

## Intro to JSX

Let's have a look at our code again:

```js
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('root'))
```

The code calls React's **render** method, and passes it two arguments, a JSX element and a container. The **render** method displays the provided element in the container, which, in our case, is the HTML element with **id="root"**.

> When you call the **render** method, any existing content of the container gets replaced. That is why, usually, the containers are empty in the HTML.

## Expressions in JSX

We can use any JavaScript expression inside JSX using curly braces.

#### For example:

```js
const name = 'David'
const el = <p>Hello, {name}</p>

ReactDOM.render(el, document.getElementById('root'))
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
<div id="{user.id}"></div>
```

> React DOM uses **camelCase** property naming convention instead of HTML attribute names.
> For example, **class** becomes **className** in JSX.

## How Does JSX Work?

When the JSX expressions are compiled, they are converted into JavaScript **objects**, representing React elements.
React then uses these elements to build the corresponding **HTML DOM** and display it in the browser.

Let's create a counter app, that increments a counter variable every second and displays it on the page as a paragraph:

```js
let counter = 0

function show () {
  counter++
  const el = <p>{counter}</p>
  ReactDOM.render(el, document.getElementById('root'))
}

setInterval(show, 1000)
```

[Try it on StackBlitz](https://stackblitz.com/edit/react-jsx-counter-example?file=index.js)

We use **setInterval** to call the **show** function every second and render the counter element on the page.

One of the great features of React is that it updates only the elements that need an update. You can inspect the HTML output of the example above and see that only the text in the paragraph gets updated every second.

> In practice, most React apps call ReactDOM.render() once.
> We will learn how to update elements without calling the render method in the next lessons.

## Virtual DOM

We learned in the previous part that React updates only the elements that are necessary.
This allows React apps to be much faster than apps built with other front-end technologies.

#### But how does React achieve that?

React uses a **Virtual DOM**, which is a lightweight representation of the DOM.
When an element gets changed, it is first updated in the Virtual DOM. That process is fast, as the virtual DOM is represented by simple objects.

After that, React compares the Virtual DOM to its previous state and only applies the DOM updates necessary to bring the DOM to the desired state.

> **DOM** stands for **D**ocument **O**bject **M**odel and is a tree-like representation of the HTML page.
