import { useState, useRef } from 'react'
import { simularLanzamiento } from '../logic/lanzamiento'
import { JUGADORES, PUNTAJE_MAXIMO } from '../CONSTANTS/constants'
export const useTurno = () => {
  const [turno, setTurno] = useState(true)
  const [winner, setWinner] = useState(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [puntActual, setPuntaje] = useState(0)

  const player1 = useRef(0)
  const player2 = useRef(0)

  const winnerCondition = (acumulado) => {
    if (acumulado >= PUNTAJE_MAXIMO) {
      setWinner(turno ? JUGADORES[0] : JUGADORES[1])
    }
  }

  const toggleTurno = () => {
    const simulationResult = simularLanzamiento()
    setX(simulationResult.x)
    setY(simulationResult.y)

    setPuntaje(simulationResult.puntaje)

    // acumulado de puntos del jugador del turno actual
    const acumulado = turno ? player1.current += puntActual : player2.current += puntActual

    console.log(`puntaje de ${turno ? JUGADORES[0] : JUGADORES[1]} ${acumulado}`)

    winnerCondition(acumulado)

    if (!winner) {
      const nextTurn = !turno
      setTurno(nextTurn)
    }
  }
  return { turno, winner, x, y, puntActual, toggleTurno }
}
