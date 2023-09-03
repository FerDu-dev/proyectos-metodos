import 'boxicons'
import { useState, useEffect, useContext } from 'react'
import { SimulationContext } from '../context/Simulation'
export function Carro ({ id, permisos }) {
  const [animation, setAnimation] = useState('auto')
  const [startAnimation, setStartAnimation] = useState(false)
  const { start } = useContext(SimulationContext)

  const randomAnimation = () => {
    const posibleAnimation = []
    if (start) {
      switch (id) {
        case 1:
          if (permisos.cicle1 === true) {
            posibleAnimation.push('auto vertical-1')
            posibleAnimation.push('auto vertical-2')
          } else if (permisos.cicle3 === true) {
            posibleAnimation.push('auto vertical-3')
          } else {
            posibleAnimation.push('auto')
          }
          break
        case 4:
          if (permisos.cicle2 === true) {
            posibleAnimation.push('auto horizontal-1')
            posibleAnimation.push('auto horizontal-2')
          } else if (permisos.cicle4 === true) {
            posibleAnimation.push('auto horizontal-3')
          } else {
            posibleAnimation.push('auto')
          }

          break
        case 3:
          if (permisos.cicle1 === true) {
            posibleAnimation.push('auto vertical-4')
            posibleAnimation.push('auto vertical-5')
          } else if (permisos.cicle3 === true) {
            posibleAnimation.push('auto vertical-6')
          } else {
            posibleAnimation.push('auto')
          }
          break
        case 2:
          if (permisos.cicle2 === true) {
            posibleAnimation.push('auto horizontal-4')
            posibleAnimation.push('auto horizontal-5')
          } else if (permisos.cicle4 === true) {
            posibleAnimation.push('auto horizontal-6')
          } else {
            posibleAnimation.push('auto')
          }

          break
        default:
          break
      }
    } else {
      posibleAnimation.push('auto')
    }
    return posibleAnimation[Math.floor(Math.random() * posibleAnimation.length)]
  }

  const animationStart = () => {
    setStartAnimation(true)
  }

  const animationEnd = () => {
    setStartAnimation(false)
  }

  useEffect(() => {
    if (startAnimation === false && start === true) {
      setAnimation(randomAnimation())
    }
  }, [permisos])
  return (
    <div className={animation} onAnimationStart={animationStart} onAnimationEnd={animationEnd}>
      <box-icon type='solid' name='car' color='orange' />
    </div>
  )
}
