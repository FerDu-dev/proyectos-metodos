// Necesito resolver este problema

const MATRIZ = [
  [5, 8, 5, 9, 7],
  [7, 2, 3, 6, 8],
  [9, 10, 8, 9, 8],
  [8, 7, 9, 7, 8],
  [6, 9, 9, 10, 5]
]

const obtenerColumnas = (MATRIZ) => {
  const columnas = []
  for (let i = 0; i < MATRIZ.length; i++) {
    columnas.push([])
  }
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ.length; j++) {
      columnas[j].push(MATRIZ[i][j])
    }
  }
  return columnas
}

const obtenerFilas = (MATRIZ) => {
  const filas = []
  for (let i = 0; i < MATRIZ.length; i++) {
    filas.push([])
  }
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ.length; j++) {
      filas[i].push(MATRIZ[i][j])
    }
  }
  return filas
}

const copiarMatriz = (MATRIZ) => {
  const newMatriz = new Array(MATRIZ.length).fill(null).map(() => new Array(MATRIZ.length).fill(0))
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ.length; j++) {
      newMatriz[i][j] = MATRIZ[i][j]
    }
  }
  return newMatriz
}

// Esta corresponde a la matriz inicial, importante para el metodo hungaro
const MATRIZ2 = copiarMatriz(MATRIZ)

// Funcion que retorna el coeficiente minimo de cada filla
const minCadaFila = (MATRIZ) => {
  const minFilas = []
  for (let i = 0; i < MATRIZ.length; i++) {
    let min = Infinity
    for (let j = 0; j < MATRIZ[i].length; j++) {
      if (MATRIZ[i][j] < min) {
        min = MATRIZ[i][j]
      }
    }
    minFilas.push(min)
  }
  return minFilas
}

// Funcion que retorna el coeficiente minimo de cada columna
const minCadaColumna = (MATRIZ) => {
  const minColumnas = []
  for (let i = 0; i < MATRIZ.length; i++) {
    let min = Infinity
    for (let j = 0; j < MATRIZ[i].length; j++) {
      if (MATRIZ[j][i] < min) {
        min = MATRIZ[j][i]
      }
    }
    minColumnas.push(min)
  }
  return minColumnas
}

// Funcion que retorna el coeficiente maximo de la matriz
const maximoNumero = (MATRIZ) => {
  let max = 0
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ[i].length; j++) {
      if (MATRIZ[i][j] > max) {
        max = MATRIZ[i][j]
      }
    }
  }
  return max
}

const metodoAsignacion = (MATRIZ) => {
  const markedRows = new Array(MATRIZ.length).fill(false)
  const markedCols = new Array(MATRIZ.length).fill(false)

  const maxNumero = maximoNumero(MATRIZ)

  console.log('Antes de modificar por primera vez\n\n', MATRIZ)
  // primer paso del metodo hungaro
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ.length; j++) {
      MATRIZ[i][j] = maxNumero - MATRIZ[i][j]
    }
  }
  console.log('Restado el maximo valor de la matriz con el resto de elementos\n\n', MATRIZ)

  let minCol = minCadaColumna(MATRIZ)
  console.log(minCol)
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ.length; j++) {
      MATRIZ[j][i] = MATRIZ[j][i] - minCol[i]
    }
  }
  console.log('Restado los elementos de cada columna con su menor valor de la fila', MATRIZ)

  let minFila = minCadaFila(MATRIZ)
  console.log(minFila)
  for (let i = 0; i < MATRIZ.length; i++) {
    for (let j = 0; j < MATRIZ.length; j++) {
      MATRIZ[i][j] = MATRIZ[i][j] - minFila[i]
    }
  }
  console.log('Resrando los elementos de cada fila con su menor valor', MATRIZ)
  minFila = minCadaFila(MATRIZ)
  minCol = minCadaColumna(MATRIZ)
  let counter = 0
  for (let i = 0; i < minFila.length; i++) {
    // console.log(`Fila ${i}: ${minFila[i]} Columna ${i}: ${minCol[i]}`)
    if (minFila[i] === 0 && minCol[i] === 0) {
      counter++
    }
  }

  if (counter === 5) {
    // hace lo de marcar filas y columnas

  } else {
    // hace otra cosa
  }

  //   if (counter === 5) {
  //     // Aqui manejo los indices de las asignaciones
  //     const asignaciones = []
  //     for (let i = 0; i < MATRIZ.length; i++) {
  //       for (let j = 0; j < MATRIZ.length; j++) {
  //         if (MATRIZ[i][j] === 0) {
  //           asignaciones.push([i, j])
  //         }
  //       }
  //     }

//     console.log('estas son las asigaciones\n', asignaciones)
//   } else {
//     metodoAsignacion(MATRIZ)
//   }
}

metodoAsignacion(MATRIZ)
