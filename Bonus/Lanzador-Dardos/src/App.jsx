import './App.css'
import { Tablero } from './components/Tablero'
import { useTurno } from './hooks/useTurno'
import { JUGADORES } from './CONSTANTS/constants'

// TURNO JUGADOR 1 TRUE
// TURNO JUGADOR 2 FALSE

function App () {
  const { turno, winner, x, y, puntActual, toggleTurno } = useTurno()

  return (
    <>
      <section className='container'>
        <h1>Lanzamiento de Dardos</h1>
        <Tablero x={x} y={y} />
        <h2>{`${turno ? JUGADORES[0] : JUGADORES[1]}, acabas de hacer ${puntActual}`}</h2>
        <div className='container-table dardo'>
          <button onClick={toggleTurno}>
            Lanza el Dardo {turno ? JUGADORES[0] : JUGADORES[1]}
          </button>

          {winner && <h1>{winner} ha ganado</h1>}

        </div>

      </section>
    </>
  )
}

export default App
