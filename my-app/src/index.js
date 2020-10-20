import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = "David";
const el = <p>Hello, {name}</p>;

ReactDOM.render(
  el,
  document.getElementById('root')
); 