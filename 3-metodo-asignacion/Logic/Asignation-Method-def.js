import Matriz from './Matriz.js'

const MATRIZ = new Matriz([
  [5, 8, 5, 9, 7],
  [7, 2, 3, 6, 8],
  [9, 10, 8, 9, 8],
  [8, 7, 9, 7, 8],
  [6, 9, 9, 10, 5]
])

const originalMatriz = [
  [5, 8, 5, 9, 7],
  [7, 2, 3, 6, 8],
  [9, 10, 8, 9, 8],
  [8, 7, 9, 7, 8],
  [6, 9, 9, 10, 5]
]

const asignacion = []

console.log(MATRIZ.toString())

// PASO 1: OBTENER EL ELEMENTO CON EL MAYOR VALOR DE LA MATRIZ
const mayorElem = MATRIZ.obtenerMayor()
console.log('El elemento mayor de la matriz es: ', mayorElem)

// PASO 2: RESTAR TODOS LOS ELEMENTOS DE LA MATRIZ POR EL ELEMENTO MAYOR
MATRIZ.restarElementosPorElMayor()
console.log('Matriz con elementos restados por el mayor: \n', MATRIZ.toString())

// PASO 3: RESTAR EL MENOR DE CADA COLUMNA A CADA ELEMENTO DE LA COLUMNA CORRESPONDIENTE
MATRIZ.restarElementosDeCadaColumnaPorElMenor()
console.log('Matriz con elementos restados por el menor de cada columna: \n', MATRIZ.toString())

// PASO 4: RESTAR EL MENOR DE CADA COLUMNA A CADA ELEMENTO DE LA FILA CORRESPONDIENTE
MATRIZ.restarElementosDeCadaFilaPorElMenor()
console.log('Matriz con elementos restados por el menor de cada fila: \n', MATRIZ.toString())

// PASO 5: SE DECLARA EL OBJETO QUE CONTENDRA LAS LINEAS
// IMAGINARIAS QUE SE DIBUJARAN EN LA MATRIZ PARA ASIGNAR
// LOS ELEMENTOS CORRESPONDIENTES

let linesCount = 0
const newLine = {
  filas: {
    index: [],
    elements: []
  },
  columnas: {
    index: [],
    elements: []
  }
}

// PASO 6: SE ITERA HASTA QUE LA CANTIDAD DE LINEAS SEA IGUAL A LA DIMENSION DE LA MATRIZ

while (linesCount < MATRIZ.length) {
  const zerosCol = MATRIZ.cantidadDeCerosPorColumna()
  let zerosIndexFil = MATRIZ.indiceDeCerosPorFila()
  for (let i = 0; i < MATRIZ.length; i++) {
    const indicesActuales = zerosIndexFil[i]
    const cantCerosEnFila = zerosIndexFil[i].length
    console.log('INDICES ACTUALES: ', indicesActuales)

    // SI LA CANTIDAD DE CEROS EN LA FILA ACTUAL ES DIFERENTE DE CERO
    if (indicesActuales.length !== 0) {
      // SE OBTIENE LA CANTIDAD DE CEROS EN LA COLUMNA ACTUAL
      let totalDeCerosPorColumn = 0
      for (let j = 0; j < indicesActuales.length; j++) {
        totalDeCerosPorColumn += zerosCol[indicesActuales[j]]
      }

      // SE CREA UNA NUEVA LINEA
      // SI LA CANTIDAD DE CEROS EN LA COLUMNA ACTUAL ES MAYOR A LA CANTIDAD DE CEROS EN LA FILA ACTUAL
      console.log('total De ceros por columna iteracion:', i, totalDeCerosPorColumn)
      if (totalDeCerosPorColumn > cantCerosEnFila) {
        // SE AGREGAN LOS ELEMENTOS DE LA COLUMNA ACTUAL A LA NUEVA LINEA
        for (let j = 0; j < indicesActuales.length; j++) {
          newLine.columnas.index.push(indicesActuales[j])
          newLine.columnas.elements.push(MATRIZ.columnas[indicesActuales[j]])
        }

        // SE ELIMINAN LOS INDICES DE LOS CEROS DE LA FILA ACTUAL DE LOS INDICES DE LOS CEROS DE LAS DEMAS FILAS
        console.log('array a modificas', zerosIndexFil)
        for (let j = 0; j < zerosIndexFil.length; j++) {
          zerosIndexFil = zerosIndexFil.map((internArray, index) => {
            if (index > j) {
              for (let k = 0; k < indicesActuales.length; k++) {
                internArray = internArray.filter((element) => element !== indicesActuales[k])
              }
            }
            return internArray
          })
        }
      } else {
        newLine.filas.elements.push(MATRIZ.filas[i])
        newLine.filas.index.push(i)
      }
    }
  }
  console.log(newLine)
  linesCount += newLine.filas.index.length + newLine.columnas.index.length

  if (linesCount >= MATRIZ.length) {
    // SE PROCEDE CON LA ASIGNACION

    zerosIndexFil = MATRIZ.indiceDeCerosPorFila()
    const zerosIndexCol = MATRIZ.indiceDeCerosPorColumna()
    const zerosFil = MATRIZ.cantidadDeCerosPorFila()
    const zerosCol = MATRIZ.cantidadDeCerosPorColumna()
    console.log('INDICES DE CEROS POR FILA: ', zerosIndexFil)
    console.log('INDICES DE CEROS POR COLUMNA: ', zerosIndexCol)
    console.log('CANTIDAD DE CEROS POR FILA: ', zerosFil)
    console.log('CANTIDAD DE CEROS POR COLUMNA: ', zerosCol)

    for (let i = 0; i < zerosIndexFil.length; i++) {
      const indiceActual = zerosIndexFil[i]
      if (indiceActual.length === 1) {
        asignacion.push({
          fila: i,
          columna: indiceActual[0]
        })
        zerosCol[indiceActual[0]] = 0
      }
    }

    console.log('CANTIDAD DE CEROS POR COLUMNA ACTUALIZADO: ', zerosCol)

    for (let i = 0; i < zerosIndexFil.length; i++) {
      const indiceActual = zerosIndexFil[i]
      if (indiceActual.length !== 1) {
        let counter = 0
        let indiceConMayorCantidadDeCeros = 0
        console.log('este es el indice actual de los ceros en la fila ', i, indiceActual)
        for (let j = 0; j < indiceActual.length; j++) {
          const index = indiceActual[j]

          if (zerosCol[index] > counter) {
            counter = zerosCol[index]
            indiceConMayorCantidadDeCeros = index
          }
        }
        console.log('INDICE CON MAYOR CANTIDAD DE CEROS EN LA FILA', i, indiceConMayorCantidadDeCeros)
        asignacion.push({
          fila: i,
          columna: indiceConMayorCantidadDeCeros
        })
        zerosCol[indiceConMayorCantidadDeCeros] = 0
      }
    }
  } else {
    const indiceDeFilas = newLine.filas.index
    const indiceDeColumnas = newLine.columnas.index
    let menor = Infinity

    for (let i = 0; i < MATRIZ.length; i++) {
      if (!indiceDeFilas.includes(i)) {
        for (let j = 0; j < MATRIZ.length; j++) {
          if (!indiceDeColumnas.includes(j)) {
            if (MATRIZ.matriz[i][j] < menor) {
              menor = MATRIZ.matriz[i][j]
            }
          }
        }
      }
    }
    console.log('menor de los NO SELECCIONADOS: ', menor)
    // LE RESTAMOS EL MENOR A LOS ELEMENTOS QUE NO ESTAN SELECCIONADOS
    for (let i = 0; i < MATRIZ.length; i++) {
      if (!indiceDeFilas.includes(i)) {
        for (let j = 0; j < MATRIZ.length; j++) {
          if (!indiceDeColumnas.includes(j)) {
            MATRIZ.restarElementoPorUnNumero(i, j, menor)
          }
        }
      }
    }

    console.log('Matriz con el menor restado: \n', MATRIZ.toString())

    // SE SUMA EL MENOR A LOS ELEMENTOS QUE ESTAN EN LA INTERSECCION DE LAS LINEAS
    for (let i = 0; i < indiceDeFilas.length; i++) {
      for (let j = 0; j < indiceDeColumnas.length; j++) {
        MATRIZ.sumarElementoPorUnNumero(indiceDeFilas[i], indiceDeColumnas[j], menor)
      }
    }
  }

  newLine.filas.index = []
  newLine.filas.elements = []
  newLine.columnas.index = []
  newLine.columnas.elements = []
}

console.log('MATRIZ RESULTANTE: \n', MATRIZ.toString())
console.log('ASIGNACION: ', asignacion)

const resultMatriz = MATRIZ.clonar()

export {
  resultMatriz,
  originalMatriz,
  asignacion
}
