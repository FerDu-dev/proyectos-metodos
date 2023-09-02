import { useState, useEffect } from 'react'

export default function Semaforo ({ ciclo, simulacionEnEjecucion }) {
  const [color, setColor] = useState('rojo')

  useEffect(() => {
    if (simulacionEnEjecucion) {
      let tiempoRestante = ciclo[color]
      const intervalo = setInterval(() => {
        tiempoRestante--
        if (tiempoRestante === 0) {
          if (color === 'rojo') {
            setColor('verde')
            tiempoRestante = ciclo.verde
          } else if (color === 'verde') {
            setColor('amarillo')
            tiempoRestante = ciclo.amarillo
          } else if (color === 'amarillo') {
            setColor('rojo')
            tiempoRestante = ciclo.rojo
          }
        }
      }, 1000)
      return () => clearInterval(intervalo)
    } else {
      setColor('rojo')
    }
  }, [ciclo, color, simulacionEnEjecucion])

  return (
    <div className='semaforo'>
      <div className={`luz ${color === 'rojo' ? 'encendida' : ''}`} />
      <div className={`luz ${color === 'amarillo' ? 'encendida' : ''}`} />
      <div className={`luz ${color === 'verde' ? 'encendida' : ''}`} />
    </div>
  )
}
