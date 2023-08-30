const radioDiana = 170 // radio de la diana

function calcularPuntaje (x, y) {
  const distanciaAlCentro = Math.sqrt(x * x + y * y)
  if (distanciaAlCentro > radioDiana) {
    return 0
  } else {
    return Math.max(0, 100 - Math.floor(distanciaAlCentro / 10) * 10)
  }
}

function simularLanzamiento () {
  const x = Math.random() * radioDiana * 2 - radioDiana
  const y = Math.random() * radioDiana * 2 - radioDiana
  const puntaje = calcularPuntaje(x, y)
  return { x, y, puntaje }
}

function jugar (participantes) {
  const resultados = {}
  for (const participante of participantes) {
    let puntajeTotal = 0
    const tiros = []
    for (let i = 0; i < 3; i++) {
      const tiro = simularLanzamiento()
      tiros.push(tiro)
      puntajeTotal += tiro.puntaje
    }
    resultados[participante] = { puntajeTotal, tiros }
  }
  return resultados
}

const participantes = ['Juan', 'Maria', 'Pedro']
const resultados = jugar(participantes)

for (const [participante, resultado] of Object.entries(resultados)) {
  console.log(`Participante: ${participante}`)
  console.log(`Puntaje total: ${resultado.puntajeTotal}`)
  console.log('Tiros:')
  for (const tiro of resultado.tiros) {
    console.log(`  x: ${tiro.x.toFixed(2)}, y: ${tiro.y.toFixed(2)}, puntaje: ${tiro.puntaje}`)
  }
}
