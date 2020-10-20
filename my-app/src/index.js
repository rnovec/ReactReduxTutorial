import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}

// class Hello extends React.Component {
//  render() {
//    return <h1>Hello world.</h1>;
//  }
// }

const el = <Hello name="David" />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);