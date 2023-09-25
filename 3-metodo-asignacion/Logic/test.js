const array = [[1, 3, 4], [4], [0, 1], [0, 2, 4], [1, 2, 3]]

// const eliminarValorDeArray = (array, valor) => {
//   const index = array.indexOf(valor)
//   if (index > -1) {
//     array.splice(index, 1)
//   }
// }

// const eliminarOcurrencias = (actual) => {
//   console.log('TURNO DEL SUB ARRAY ACTUAL: ', actual)
//   array.map((internArray) => {
//     console.log('MAPEANDO LOS ARRAY INTERNOS, ARRAY --: ', internArray)
//     for (let j = 0; j < actual.length; j++) {
//       console.log('ELEMENTO ACTUAL A ELIMINAR: ', actual[j])
//       eliminarValorDeArray(internArray, actual[j])
//     }
//     console.log('ARRAY MAPEADO DESPUES DE ELIMINAR: ', internArray)
//     return internArray
//   })
// }

// const eliminarOcurrencias = (actual, control) => {
//   console.log('Turno del subarray: ', actual)
//   array = array.map((internArray, index) => {
//     if (index > control) {
//       console.log(`mapeando los arrays internos. ARRAY INTERNO ${index} --: `, internArray)
//       for (let i = 0; i < actual.length; i++) {
//         console.log('elemento actual a eliminar ', actual[i])
//         internArray = internArray.filter((element) => element !== actual[i])
//       }
//       console.log('Subarray mapeado despues de eliminar: ', internArray)
//     }
//     return internArray
//   })
//   console.log('ARRAY DESPUES DE ELIMINAR: ', array)
// }

const contarOcurrencias = (actual, control) => {
  let counter = {
    indices: []
  }
  array.map((internArray, index) => {
    if (index > control) {
      console.log(`mapeando los arrays internos. ARRAY INTERNO ${index} --: `, internArray)
      for (let j = 0; j < actual.length; j++) {
        console.log('Numero Actual: ', actual[j])
        if (internArray.includes(actual[j])) {
          counter.indices.push(index)
        }
      }
    }
  })
}

for (let i = 0; i < array.length; i++) {
  const actual = array[i]
  console.log('ITERACION: ', i)
  contarOcurrencias(actual, i)
}

// console.log(array)

// for (let i = 0; i < array.length; i++) {
//   const actual = array[i]
//   console.log('ITERACION: ', i)
//   eliminarOcurrencias(actual, i)
// }

// console.log(array)
