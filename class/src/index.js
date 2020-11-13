import ReactDOM from 'react-dom'
import App from './router'

// Se instacia el elemento principal
// let el = <Car />
let el = <App />

// Se renederiza el contenido en el DOM
ReactDOM.render(el, document.getElementById('root'))
