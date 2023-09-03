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
    <main className='app'>
      <Container />
      <button onClick={toggleSimulation}>
        {start ? 'Detener' : 'Comenzar'} simulación
      </button>
    </main>
  )
}

export default App
