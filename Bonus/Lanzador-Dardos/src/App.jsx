import './App.css'
import { Tablero } from './components/Tablero'
import { useTurno } from './hooks/useTurno'
import { JUGADORES } from './CONSTANTS/constants'
import { WinnerModal } from './components/WinnerModal'
import { TablaPuntuacion } from './components/TablaPuntuacion'

// TURNO JUGADOR 1 TRUE
// TURNO JUGADOR 2 FALSE

function App () {
  const { turno, winner, x, y, puntActual, toggleTurno, player1, player2, inicio, resetGame, puntuaciones } = useTurno()
  return (
    <>
      <section className='container'>
        <h1>Lanzamiento de Dardos</h1>
        <Tablero x={x} y={y} inicio={inicio} />

        <div className='container-table dardo'>
          {inicio && <h2 className=''>{`${turno ? JUGADORES[0] : JUGADORES[1]}, acabas de hacer ${puntActual}`}</h2>}
          <button onClick={toggleTurno}>
            {/* Por temas de renderizado */}
            Lanza el Dardo {!turno ? JUGADORES[0] : JUGADORES[1]}
          </button>

          <div className=''>
            <h2>PUNTAJES</h2>
            <p>{`${JUGADORES[0]} : ${player1.current}`}</p>
            <p>{`${JUGADORES[1]} : ${player2.current}`}</p>
          </div>
        </div>
        {/* <TablaPuntuacion jugadores={JUGADORES} puntuaciones={puntuaciones} /> */}
      </section>
      {winner && <WinnerModal winner={winner} resetGame={resetGame} />}
    </>
  )
}

export default App
