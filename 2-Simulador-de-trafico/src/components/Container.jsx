import './Container.css'
import 'boxicons'
import { SimulationContext } from '../context/Simulation'
import { useContext, useEffect, useState } from 'react'
import { Semaforo } from './Semaforo'

export function Container () {
  const { time, controlador } = useContext(SimulationContext)
  const [ActivationSignal, setActivationSignal] = useState({
    cicle1: null,
    tr1: null,
    cicle2: null,
    tr2: null,
    cicle3: null,
    tr3: null,
    cicle4: null,
    tr4: null
  })

  const { cicle1, tr1, cicle2, tr2, cicle3, tr3, cicle4, tr4 } = controlador.timesOfCicle()

  useEffect(() => {
    const currentCicle = time % controlador.totalCicleTime()
    console.log('Tiempo: ', time, '   Tiempo del ciclo: ', currentCicle)
    if (currentCicle < cicle1) {
      setActivationSignal({
        cicle1: true,
        tr1: false,
        cicle2: false,
        tr2: false,
        cicle3: false,
        tr3: false,
        cicle4: false,
        tr4: false
      })
    } else if (currentCicle < tr1) {
      setActivationSignal({
        cicle1: false,
        tr1: true,
        cicle2: false,
        tr2: false,
        cicle3: false,
        tr3: false,
        cicle4: false,
        tr4: false
      })
    } else if (currentCicle < cicle2) {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: true,
        tr2: false,
        cicle3: false,
        tr3: false,
        cicle4: false,
        tr4: false
      })
    } else if (currentCicle < tr2) {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: false,
        tr2: true,
        cicle3: false,
        tr3: false,
        cicle4: false,
        tr4: false
      })
    } else if (currentCicle < cicle3) {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: false,
        tr2: false,
        cicle3: true,
        tr3: false,
        cicle4: false,
        tr4: false
      })
    } else if (currentCicle < tr3) {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: false,
        tr2: false,
        cicle3: false,
        tr3: true,
        cicle4: false,
        tr4: false
      })
    } else if (currentCicle < cicle4) {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: false,
        tr2: false,
        cicle3: false,
        tr3: false,
        cicle4: true,
        tr4: false
      })
    } else if (currentCicle < tr4) {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: false,
        tr2: false,
        cicle3: false,
        tr3: false,
        cicle4: false,
        tr4: true
      })
    } else {
      setActivationSignal({
        cicle1: false,
        tr1: false,
        cicle2: false,
        tr2: false,
        cicle3: false,
        tr3: false,
        cicle4: false,
        tr4: false
      })
    }
  }, [time])

  return (
    <>
      <div className='main-container'>
        <div className='container-3'>
          <Semaforo id={1} ActivationSignal={ActivationSignal} /> 1
        </div>
        <div className='container-4'>
          <Semaforo id={2} ActivationSignal={ActivationSignal} /> 2
        </div>
        <div className='container-2'>
          <Semaforo id={3} ActivationSignal={ActivationSignal} /> 3
        </div>
        <div className='container-1'>
          <Semaforo id={4} ActivationSignal={ActivationSignal} /> 4
        </div>
        <div className='calle-1'>
          <div className='subcalle1'>
            <box-icon name='left-arrow' />
          </div>
          <div className='subcalle2'>
            <box-icon name='right-arrow' />
          </div>
        </div>

        <div className='calle-2'>
          <div className='subcalle1'>
            <box-icon name='down-arrow' />
          </div>
          <div className='subcalle2'>
            <box-icon name='up-arrow' />
          </div>
        </div>
      </div>
    </>
  )
}
