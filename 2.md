# Adding React
React can be added to a website without any special tools and installations.

First, we need to add the React library as two script tags to the head of our HTML document:

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> 
```

Next, we need to add another script, to enable the use of **JSX**.
JSX is a syntax extension to JavaScript, and it is recommended to be used with React.
Don't worry, we will learn more about JSX in the next lessons. For now, let's just add the following script tag:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 
```

> This approach of adding React to a website is only suitable for creating small demos. We will learn how to create a real project ready for production in the next lesson.



After adding the required script tags, we can start building our React app!

We add a container, that will be used to display something using React.

```html
<div id="container"></div>
```

You can use any **id** for your container. It will be used by React to find the container and add content to it.

Now, it's time for our first React code!
Let's display a simple message as a heading:


```html
<script type="text/babel">
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('container')
) 
</script>
```

The code finds the **container** div, and adds the **h1** heading to it.

> Don't worry about the new syntax. We will cover it in the coming lessons.