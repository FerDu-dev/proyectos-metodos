import { createContext, useState } from 'react'
import { controlador } from '../services/Controllers'

export const SimulationContext = createContext()

export const SimulationProvider = ({ children }) => {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

  return (
    <SimulationContext.Provider value={{
      time, setTime, start, setStart, controlador
    }}
    >
      {children}
    </SimulationContext.Provider>
  )
}
