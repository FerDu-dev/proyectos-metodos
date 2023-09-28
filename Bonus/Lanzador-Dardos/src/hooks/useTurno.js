import { useState, useRef } from 'react'
import { simularLanzamiento } from '../logic/lanzamiento'
import { JUGADORES, PUNTAJE_MAXIMO } from '../CONSTANTS/constants'

import confetti from 'canvas-confetti'

export const useTurno = () => {
  const [turno, setTurno] = useState(true)
  const [winner, setWinner] = useState(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [puntActual, setPuntaje] = useState(null)
  const [inicio, setInicio] = useState(false)
  const [puntuaciones, setPuntuaciones] = useState([]);

  const player1 = useRef(0)
  const player2 = useRef(0)

  const winnerCondition = (acumulado) => {
    if (acumulado >= PUNTAJE_MAXIMO) {
      setWinner(turno ? JUGADORES[0] : JUGADORES[1])
      confetti()
    }
  }

  // problema de render
  const toggleTurno = () => {
    const simulationResult = simularLanzamiento();
    setX(simulationResult.x);
    setY(simulationResult.y);
  
    setPuntaje(simulationResult.puntaje);
  
    // acumulado de puntos del jugador del turno actual
    const acumulado = turno
      ? (player1.current += puntActual)
      : (player2.current += puntActual);
  
    winnerCondition(acumulado);
  
    // Actualizar el estado de puntuaciones
    setPuntuaciones((prevPuntuaciones) => [
      ...prevPuntuaciones,
      {
        [JUGADORES[0]]: turno ? puntActual : 0,
        [JUGADORES[1]]: !turno ? puntActual : 0,
      },
    ]);
  
    const nextTurn = !turno;
    setTurno(!turno);
    if (!inicio) {
      setInicio(true);
    }
  };

  const resetGame = () => {
    player1.current = 0
    player2.current = 0
    setTurno(true)
    setWinner(null)
    setX(0)
    setY(0)
    setPuntaje(null)
    setInicio(false)
  }
  return { turno, winner, x, y, puntActual, toggleTurno, player1, player2, inicio, resetGame }
}
