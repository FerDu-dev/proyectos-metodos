import './App.css'
import Matriz from './components/Matriz'
import Enunciado from './components/Enunciado'
import { resultMatriz, originalMatriz, asignacion } from '../Logic/Asignation-Method-def.js'
import Solution from './components/Solution'

// ORDENAR EL OBJETO DE ASIGNACION POR EL VALOR DE LA CLAVE FILA
const ordenado = asignacion.sort((a, b) => a.fila - b.fila)
console.log(ordenado)

function App () {
  return (
    <main>
      <Enunciado />
      <div className='container'>
        <div>
          <Matriz matriz={originalMatriz} title='MATRIZ ORIGINAL' />
        </div>
        <div className='process'>
          <h1>👓</h1>
          <h1>METODO HÚNGARO</h1>
          <h1>👓</h1>
        </div>
        <div>
          <Matriz matriz={resultMatriz} title='MATRIZ SOLUCION' />
        </div>
      </div>
      <Solution asignation={ordenado} />
    </main>
  )
}

export default App
