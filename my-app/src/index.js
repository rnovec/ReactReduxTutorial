import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
const arr = ['A', 'B', 'C']

function MyList (props) {
  const arr = props.data
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItems}</ul>
}

const el = <MyList data={arr} />

ReactDOM.render(el, document.getElementById('root'))
