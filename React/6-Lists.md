# Lists

Web apps commonly contain repeating elements, such as lists or sections, where the same [DOM]() element is repeated with a different data set.

Consider an array of strings:

```js
const arr = ['A', 'B', 'C']
```

We need to render a list `<li>` element for each item in the array.
We can define a **MyList** component and pass it the array as a prop using a custom **data** attribute:

```js
<MyList data={arr} />
```

Now, when the array is accessible via [props](./3-Props.md), we can write the component logic:

```js
function MyList (props) {
  const arr = props.data
  const listItems = arr.map(val => <li>{val}</li>)
  return <ul>{listItems}</ul>
}
```

We take the input array from the incoming props, loop through the array using the JavaScript **map** function and return a `<li>`element for each item.
The resulted array is stored in the **listItems** variable.
Then, the component returns the listItems array inside a `<ul>` tag.

#### The result:

![](https://api.sololearn.com/DownloadFile?id=4435)

> This code results in a warning, saying that each element needs a unique **key**. We will look into **keys** in the next part.

## Keys

- Each element in a list must have a **key** attribute.
- Keys act as a unique identity, identifying each element.
- Usually, these are IDs from your data, or can be auto-generated indexes.

```js
const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
```
> Keys are important, because they uniquely identify elements, helping React understand which items have changed, are added, or are removed.
