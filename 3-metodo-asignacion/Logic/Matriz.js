class Matriz {
  constructor (matriz) {
    this.matriz = matriz
    this.filas = this.obtenerFilas()
    this.columnas = this.obtenerColumnas()
    this.length = matriz.length
  }

  obtenerColumnas () {
    const columnas = []
    for (let i = 0; i < this.matriz.length; i++) {
      columnas.push([])
    }
    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0; j < this.matriz.length; j++) {
        columnas[j].push(this.matriz[i][j])
      }
    }
    return columnas
  }

  obtenerFilas () {
    const filas = []
    for (let i = 0; i < this.matriz.length; i++) {
      filas.push([])
    }
    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0; j < this.matriz.length; j++) {
        filas[i].push(this.matriz[i][j])
      }
    }
    return filas
  }

  obtenerElemento (fila, columna) {
    return this.matriz[fila][columna]
  }

  obtenerMayorDeFila (fila) {
    let mayor = 0
    for (let i = 0; i < this.matriz.length; i++) {
      if (this.matriz[fila][i] > mayor) {
        mayor = this.matriz[fila][i]
      }
    }
    return mayor
  }

  obtenerMayorDeColumna (columna) {
    let mayor = 0
    for (let i = 0; i < this.matriz.length; i++) {
      if (this.matriz[i][columna] > mayor) {
        mayor = this.matriz[i][columna]
      }
    }
    return mayor
  }

  obtenerMenorDeFila (fila) {
    let menor = 99
    for (let i = 0; i < this.matriz.length; i++) {
      if (this.matriz[fila][i] < menor) {
        menor = this.matriz[fila][i]
      }
    }
    return menor
  }

  obtenerMenorDeColumna (columna) {
    let menor = 99
    for (let i = 0; i < this.matriz.length; i++) {
      if (this.matriz[i][columna] < menor) {
        menor = this.matriz[i][columna]
      }
    }
    return menor
  }

  obtenerMayor () {
    let mayor = 0
    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0; j < this.matriz.length; j++) {
        if (this.matriz[i][j] > mayor) {
          mayor = this.matriz[i][j]
        }
      }
    }
    return mayor
  }

  restarElementoPorUnNumero (i, j, numero) {
    this.matriz[i][j] = this.matriz[i][j] - numero
    this.actualizarFilas()
    this.actualizarColumnas()
  }

  sumarElementoPorUnNumero (i, j, numero) {
    this.matriz[i][j] = this.matriz[i][j] + numero
    this.actualizarFilas()
    this.actualizarColumnas()
  }

  restarElementosPorElMayor () {
    const mayor = this.obtenerMayor()
    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0; j < this.matriz.length; j++) {
        this.matriz[i][j] = mayor - this.matriz[i][j]
      }
    }
    this.actualizarColumnas()
    this.actualizarFilas()
  }

  restarElementosDeCadaFilaPorElMenor () {
    for (let i = 0; i < this.matriz.length; i++) {
      const menor = this.obtenerMenorDeFila(i)
      for (let j = 0; j < this.matriz.length; j++) {
        this.matriz[i][j] = this.matriz[i][j] - menor
      }
    }
    this.actualizarColumnas()
    this.actualizarFilas()
  }

  restarElementosDeCadaColumnaPorElMenor () {
    for (let i = 0; i < this.matriz.length; i++) {
      const menor = this.obtenerMenorDeColumna(i)
      for (let j = 0; j < this.matriz.length; j++) {
        this.matriz[j][i] = this.matriz[j][i] - menor
      }
    }
    this.actualizarColumnas()
    this.actualizarFilas()
  }

  cantidadDeCerosPorFila () {
    const ceros = []
    for (let i = 0; i < this.matriz.length; i++) {
      let counter = 0
      for (let j = 0; j < this.matriz.length; j++) {
        if (this.matriz[i][j] === 0) {
          counter++
        }
      }
      ceros.push(counter)
    }
    return ceros
  }

  indiceDeCerosPorFila () {
    const indices = []
    for (let i = 0; i < this.matriz.length; i++) {
      const index = []
      for (let j = 0; j < this.matriz.length; j++) {
        if (this.matriz[i][j] === 0) {
          index.push(j)
        }
      }
      indices.push(index)
    }
    return indices
  }

  indiceDeCerosPorColumna () {
    const indices = []
    for (let i = 0; i < this.matriz.length; i++) {
      const index = []
      for (let j = 0; j < this.matriz.length; j++) {
        if (this.matriz[j][i] === 0) {
          index.push(j)
        }
      }
      indices.push(index)
    }
    return indices
  }

  cantidadDeCerosPorColumna () {
    const ceros = []
    for (let i = 0; i < this.matriz.length; i++) {
      let counter = 0
      for (let j = 0; j < this.matriz.length; j++) {
        if (this.matriz[j][i] === 0) {
          counter++
        }
      }
      ceros.push(counter)
    }
    return ceros
  }

  clonar () {
    return [].concat(this.matriz)
  }

  toString () {
    let string = '\n'
    for (let i = 0; i < this.matriz.length; i++) {
      string += `Fila ${i + 1} -- [${this.matriz[i]}]\n`
    }
    return string
  }

  actualizarFilas () {
    this.filas = this.obtenerFilas()
  }

  actualizarColumnas () {
    this.columnas = this.obtenerColumnas()
  }
}

export default Matriz
