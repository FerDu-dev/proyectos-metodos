import { useState, useEffect } from 'react'

export default function Carro ({ ruta, velocidad, simulacionEnEjecucion }) {
  const [posicion, setPosicion] = useState(0)

  useEffect(() => {
    if (simulacionEnEjecucion) {
      const intervalo = setInterval(() => {
        setPosicion((posicion) => (posicion + velocidad) % ruta.length)
      }, 1000)
      return () => clearInterval(intervalo)
    } else {
      setPosicion(0)
    }
  }, [ruta, velocidad, simulacionEnEjecucion])

  return (
    <div
      className='carro'
      style={{
        left: ruta[posicion].x,
        top: ruta[posicion].y
      }}
    />
  )
}
