/**
 * Componente de Tabla de Multiplicar
 * recibe por medio de sus props un numero
 * @param {Number} nums
 */
function Tabla (props) {
  // Podemos usar una lista de numeros
  // para renderizar multiples elementos
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return numbers.map(number => (
    <table border='1'>
      <tr>
        <th>Multiplicar</th> <th>Resultado</th>
      </tr>
      <tr>
        <th>
          {/* Primera columna de operacion */}
          {props.num} x {number}
        </th>
        {/* Segunda columna de resultado */}
        <th>{props.num * number}</th>
      </tr>
    </table>
  ))
}

export default Tabla