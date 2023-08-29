import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [animation, setAnimation] = useState(false)
  const [number, setNumber] = useState('🎲')

  // ACTIVA LA ANIMACION Y ES LA FUNCION QUE LLAMA EL BOTON
  const toggleAction = () => {
    toggleAnimation()
  }

  // RETORNA UN NUMERO ALEATORIO ENTRE 1 Y 6 EN SU FORMA DE ICONO DE DADO (PUEDE CAMBIAR)
  const getRandomNumber = () => {
    // Quiero retornar un numero aleatorio entre 1 y 6 En su forma de icono de DADO
    return Math.floor(Math.random() * 6) + 1
  }

  // ACTIVA LA ANIMACION Y CAMBIA EL ESTADO DE ANIMATION
  const toggleAnimation = () => {
    setAnimation(!animation)
  }

  // SE EJECUTA CUANDO EL COMPONENTE SE MONTA Y CUANDO SE ACTUALIZA EL ESTADO DE ANIMATION
  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false)
        setNumber(getRandomNumber())
      }, 1000)
    }
  }, [animation])

  return (
    <div className='app'>
      <header>
        <h1>Metodos cuantitativos - Lanzamiento de dados</h1>
      </header>

      <section>
        <div className={`dado ${animation}`}>
          {number}
        </div>
        <button onClick={toggleAction}>
          Lanzar
        </button>
      </section>

    </div>
  )
}

export default App
