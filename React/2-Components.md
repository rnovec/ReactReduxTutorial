# Components

Components let you split the page into independent and reusable parts.

Let's visualize this by taking a look at a piece of the SoloLearn Discussions page:

![](https://api.sololearn.com/DownloadFile?id=3920)
Notice that the page can be split into multiple parts. Each of these "parts" are a **component**.
The heading is a component, the "new question" button is a component, and the search bar is its own component.

This makes organizing the page leaps and bounds easier, but even more importantly, components allow us as the developers to separate concerns from one another.

> **Separation of concerns** is a programming principle that states that each concern should be separated into individual pieces.
> For example, in the diagram above, the "new question" button (2) should be clicked if a user wanted to add a new question, whereas the search bar (3) would be used if the user wanted to search the existing questions.

## Functional Components

In React, there are two types of components that you can use: **Functional Components** and **Class Components**.
In this part, we will talk about functional components.

A functional component is a simple JavaScript function:

```js
function Hello () {
  return <h1>Hello world.</h1>
}
```

The code above defined a functional component called **Hello**, that returns a simple React element.

> Notice that the name of the functional component begins with a **capital letter**. This is absolutely critical. If we start the name of a component with a lowercase letter, the browser will treat our component like a regular HTML element instead of a Component.

## Rendering Components

In order to display the component, we need to create the corresponding JSX element.

For example, for our user-defined component Hello:

```js
const el = <Hello />
```

Now, we can use our user-defined element and render it on the page:

```js
function Hello () {
  return <h1>Hello world.</h1>
}

const el = <Hello />
ReactDOM.render(el, document.getElementById('root'))
```

## Class Components

**Class components** are typically used when there are more advanced user interactions, like forms, and animations.

All class components need to extend the **React.Component** class.

We can rewrite our **Hello** functional component as a class component:

```js
class Hello extends React.Component {
  render () {
    return <h1>Hello world.</h1>
  }
}
```

Class components need to have a **render** method, which is in charge of telling what the page should show.

> We will learn about the features and differences of functional and class components in the next lessons.
