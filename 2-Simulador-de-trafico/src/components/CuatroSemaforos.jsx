import Semaforo from './Semaforo'
import Carro from './Carro'

export default function CuatroSemaforos ({ simulacionEnEjecucion }) {
  const ciclo = {
    verde: 17,
    amarillo: 3,
    rojo: 20
  }

  const ruta1 = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 20, y: 0 },
    { x: 100, y: 100 }
  ]

  const ruta2 = [
    { x: 100, y: 0 },
    { x: 90, y: 0 },
    { x: 80, y: 0 },
    { x: 0, y: 100 }
  ]

  const ruta3 = [
    { x: 100, y: 100 },
    { x: 90, y: 90 },
    { x: 80, y: 80 },
    { x: 0, y: 0 }
  ]

  const ruta4 = [
    { x: 0, y: 100 },
    { x: 10, y: 90 },
    { x: 20, y: 80 },
    { x: 100, y: 0 }
  ]

  return (
    <div className='container'>
      <Carro ruta={ruta1} velocidad={1} simulacionEnEjecucion={simulacionEnEjecucion} />
      <Carro ruta={ruta2} velocidad={2} simulacionEnEjecucion={simulacionEnEjecucion} />
      <Carro ruta={ruta3} velocidad={1.5} simulacionEnEjecucion={simulacionEnEjecucion} />
      <Carro ruta={ruta4} velocidad={2.5} simulacionEnEjecucion={simulacionEnEjecucion} />
      <div className='container-block'>
        <Semaforo ciclo={ciclo} simulacionEnEjecucion={simulacionEnEjecucion} />
      </div>
      <div className='container-block'>
        <Semaforo ciclo={ciclo} simulacionEnEjecucion={simulacionEnEjecucion} />
      </div>
      <div className='container-block'>
        <Semaforo ciclo={ciclo} simulacionEnEjecucion={simulacionEnEjecucion} />
      </div>
      <div className='container-block'>
        <Semaforo ciclo={ciclo} simulacionEnEjecucion={simulacionEnEjecucion} />
      </div>
    </div>
  )
}
