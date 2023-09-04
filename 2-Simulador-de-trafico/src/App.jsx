import './App.css'
import { useContext, useEffect } from 'react'
import { SimulationContext } from './context/Simulation'
import { Container } from './components/Container'

function App () {
  const { setTime, start, setStart } = useContext(SimulationContext)

  const toggleSimulation = () => {
    setStart(!start)
  }

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setTime(time => time + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [start])

  return (
    <main className='app contenedor'>
      <div className='app'>
        <h1>Simulador de Tráfico</h1>
        <Container />
        <button className='button-56' onClick={toggleSimulation}>
          {start ? 'Detener' : 'Comenzar'} simulación
        </button>
      </div>
      <div className='integrantes'>
        <p>Santiago Briceño 28.063.634</p>
        <p>César Pausín 28.402.367</p>
        <p>Fernando Duno 27.173.917</p>
        <p>José Quintero 27.657.168</p>
        <p>Sofía Tamaris 30.053.436</p>
      </div>
    </main>

  )
}

export default App
