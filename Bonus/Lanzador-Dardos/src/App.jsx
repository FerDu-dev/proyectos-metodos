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
   
   const player1 = useRef(0);
   const player2 = useRef(0);



   const toggleTurno = () => {
    const simulationResult = simularLanzamiento()
    setX(simulationResult.x)
    setY(simulationResult.y)

    turno ? player1.current += simulationResult.puntaje : player2.current += simulationResult.puntaje

    console.log(`puntaje del jugador1 ${player1.current}`)
    console.log(`puntaje del jugador2 ${player2.current}`)
    
    const nextTurn = !turno
    setTurno(nextTurn)
   }

  return (
    <>
      <section className='container'>
        <h1>Lanzamiento de Dardos</h1>
        <Tablero x={x} y={y}/>
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
