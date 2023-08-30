import { useEffect, useRef, useState } from 'react'
import {simularLanzamiento} from './logic/lanzamiento'
import './App.css'
import { Tablero } from './components/Tablero'

const JUGADORES = ['Santiago', 'Andres']

// TURNO JUGADOR 1 TRUE
// TURNO JUGADOR 2 FALSE

function App() {
   const [turno, setTurno] = useState(true)
   const [winner, setWinner] = useState(null)
   const [x, setX] = useState(0)
   const [y, setY] = useState(0)
   const [puntActual, setPuntaje] = useState(0)
   
   const player1 = useRef(0);
   const player2 = useRef(0);

   const toggleTurno = () => {
    const simulationResult = simularLanzamiento()
    setX(simulationResult.x)
    setY(simulationResult.y)

    setPuntaje(simulationResult.puntaje)
    
    let acumulado = turno ? player1.current += puntActual : player2.current += puntActual;

    console.log(`puntaje de ${turno ? JUGADORES[0] : JUGADORES[1]} ${acumulado}`)
    console.log(`acabas de ganar ${valor} puntos`)
        
    const nextTurn = !turno
    setTurno(nextTurn)
    setPuntaje(0)

   }

  return (
    <>
      <section className='container'>
        <h1>Lanzamiento de Dardos</h1>
        <Tablero x={x} y={y}/>
        <h2>{`${turno ? JUGADORES[0] : JUGADORES[1]}, acabas de hacer ${puntActual}`}</h2>
        <div className='container-table dardo'>
          <button onClick={toggleTurno}>
            Lanza el Dardo {turno ? JUGADORES[0] : JUGADORES[1]}
          </button>
        </div>
      </section>
    </>
  )

}

export default App
