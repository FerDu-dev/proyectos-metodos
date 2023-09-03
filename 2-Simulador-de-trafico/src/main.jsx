import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SimulationProvider } from './context/Simulation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SimulationProvider>
    <App />
  </SimulationProvider>

)
