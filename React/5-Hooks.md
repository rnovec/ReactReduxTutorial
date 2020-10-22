# Hooks
Earlier version of React allowed to use state only with class components.
In recent iterations of React, a new feature called **hooks** was introduced, allowing to use state inside of functional components.

First, we need to import the **useState** hook:

```js
import React, { useState } from 'react';
```

**useState** returns a pair, the current state value and a function, that lets you change the state.
**useState** takes one argument, which is the initial value of the state.

Let's look at an example:

```js
function Hello() {
const [name, setName] = useState("David");

return <h1>Hello {name}.</h1>;
}
```
## Counter App using Hooks
Now we can rewrite our Counter app from the previous lesson using a functional component and hooks!

Here is the code:
```js
function Counter() {
const [counter, setCounter] = useState(0);

function increment() {
setCounter(counter+1);
}

return <div>

  <p>{counter}</p>
  <button onClick={increment}>
    Increment
  </button>
  </div>;
}
```
As you can see, compared to the class component, the code is much shorter and easier to read and understand. That was one of the reasons why the React team created Hooks.

> Remember, hooks can only be used inside functional components.
> Hooks are functions that allow to "hook into" React features from function components.
