import 'boxicons'
import { useEffect, useState } from 'react'

export function Semaforo ({ id, ActivationSignal }) {
  const [color, setColor] = useState('red')
  const cicle1 = ActivationSignal.cicle1
  const tr1 = ActivationSignal.tr1
  const cicle2 = ActivationSignal.cicle2
  const tr2 = ActivationSignal.tr2
  const cicle3 = ActivationSignal.cicle3
  const tr3 = ActivationSignal.tr3
  const cicle4 = ActivationSignal.cicle4
  const tr4 = ActivationSignal.tr4

  const currentColor = () => {
    switch (id) {
      case 1:
        cicle2 || cicle4 ? setColor('green') : tr2 || tr4 ? setColor('yellow') : setColor('red')
        break
      case 2:
        cicle1 || cicle3 ? setColor('green') : tr1 || tr3 ? setColor('yellow') : setColor('red')
        break
      case 3:
        cicle2 || cicle4 ? setColor('green') : tr2 || tr4 ? setColor('yellow') : setColor('red')
        break
      case 4:
        cicle1 || cicle3 ? setColor('green') : tr1 || tr3 ? setColor('yellow') : setColor('red')
        break
      default:
        setColor('red')
    }
  }

  useEffect(() => {
    currentColor()
  }, [ActivationSignal])

  return (
    <div className='semaforo'>
      <box-icon type='solid' name='traffic' color={color} />
      {id}
    </div>
  )
}
