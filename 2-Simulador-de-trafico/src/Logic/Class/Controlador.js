const TIEMPO_AMARILLO = 3
export class ControladorSimple {
  constructor (interseccion) {
    this.semaforos = interseccion.semaforos
    this.cantidadDeSemaforos = this.semaforos.length
  }

  // METODO QUE SINCRONIZA LOS SEMAFOROS DE UNA INTERSECCION PARA QUE NO HAYA COLISION DE VEHICULOS
  sincronizarSemaforos (conditions) {
    this.sync(conditions)
  }

  sync (conditions) {
    const verde1 = conditions[0]
    const verde2 = conditions[1]

    const rojo1 = verde2 + TIEMPO_AMARILLO
    const rojo2 = verde1 + TIEMPO_AMARILLO

    this.semaforos[0].setTiemposDeCambio([rojo1, TIEMPO_AMARILLO, verde1])
    this.semaforos[1].setTiemposDeCambio([rojo2, TIEMPO_AMARILLO, verde2])
  }

  toString () {
    return this.semaforos
  }
}

export class ControladorCompuesto {
  constructor (interseccionCompuesta) {
    this.semaforos = interseccionCompuesta.semaforos
  }

  sincronizarSemaforos (conditions) {
    this.sync(conditions)
  }

  totalCicleTime () {
    let time = 0
    time += this.semaforos[1][0].tiempoDeCambio[2]
    time += this.semaforos[0][0].tiempoDeCambio[2]
    time += this.semaforos[1][0].tiempoDeCambioIzq[2]
    time += this.semaforos[0][0].tiempoDeCambioIzq[2]
    time += TIEMPO_AMARILLO
    return time
  }

  timesOfCicle () {
    const time = {
      cicle1: this.semaforos[1][0].tiempoDeCambio[2],
      tr1: this.semaforos[1][0].tiempoDeCambio[2] + TIEMPO_AMARILLO,
      cicle2: this.semaforos[1][0].tiempoDeCambio[2] + this.semaforos[0][0].tiempoDeCambio[2],
      tr2: this.semaforos[1][0].tiempoDeCambio[2] + this.semaforos[0][0].tiempoDeCambio[2] + TIEMPO_AMARILLO,
      cicle3: this.semaforos[1][0].tiempoDeCambio[2] + this.semaforos[0][0].tiempoDeCambio[2] + this.semaforos[1][0].tiempoDeCambioIzq[2],
      tr3: this.semaforos[1][0].tiempoDeCambio[2] + this.semaforos[0][0].tiempoDeCambio[2] + this.semaforos[1][0].tiempoDeCambioIzq[2] + TIEMPO_AMARILLO,
      cicle4: this.semaforos[1][0].tiempoDeCambio[2] + this.semaforos[0][0].tiempoDeCambio[2] + this.semaforos[1][0].tiempoDeCambioIzq[2] + this.semaforos[0][0].tiempoDeCambioIzq[2],
      tr4: this.semaforos[1][0].tiempoDeCambio[2] + this.semaforos[0][0].tiempoDeCambio[2] + this.semaforos[1][0].tiempoDeCambioIzq[2] + this.semaforos[0][0].tiempoDeCambioIzq[2] + TIEMPO_AMARILLO
    }
    return time
  }

  /*
  time {
    cicle1: 16,
    tr1: 19,
    cicle2: 28,
    tr2: 31
    cicle3: 36,
    tr3: 39,
    cicle4: 48,
    tr4: 51
  }
*/
  // El objeto conditions tendra la siguiente forma
  // donde cada arreglo interno representa tiempos en segundos [0][0] el tiempo verde de frente y [0][1] el tiempo verde de izquierda  para los semaforos 1 y 3
  // y [1][0] el tiempo verde de frente y [1][1] el tiempo verde de izquierda para los semaforos 2 y 4
  // conditions = [[16,8], [12, 6]]

  sync (conditions) {
    const verde1 = conditions[0][0]
    const verde3 = conditions[0][0]
    const verde2 = conditions[1][0]
    const verde4 = conditions[1][0]

    const verdeIzq1 = conditions[0][1]
    const verdeIzq3 = conditions[0][1]
    const verdeIzq2 = conditions[1][1]
    const verdeIzq4 = conditions[1][1]

    const rojo1 = verde2 + TIEMPO_AMARILLO
    const rojo3 = verde2 + TIEMPO_AMARILLO
    const rojo2 = verde1 + TIEMPO_AMARILLO
    const rojo4 = verde1 + TIEMPO_AMARILLO

    const rojoIzq1 = verdeIzq2 + TIEMPO_AMARILLO
    const rojoIzq3 = verdeIzq2 + TIEMPO_AMARILLO
    const rojoIzq2 = verdeIzq1 + TIEMPO_AMARILLO
    const rojoIzq4 = verdeIzq1 + TIEMPO_AMARILLO

    // this.semaforo = [[1,3], [2,4]]

    this.semaforos[0][0].setTiemposDeCambio([rojo1, TIEMPO_AMARILLO, verde1])
    this.semaforos[0][0].setTiempoIzquierda([rojoIzq1, TIEMPO_AMARILLO, verdeIzq1])

    this.semaforos[1][0].setTiemposDeCambio([rojo2, TIEMPO_AMARILLO, verde2])
    this.semaforos[1][0].setTiempoIzquierda([rojoIzq2, TIEMPO_AMARILLO, verdeIzq2])

    this.semaforos[0][1].setTiemposDeCambio([rojo3, TIEMPO_AMARILLO, verde3])
    this.semaforos[0][1].setTiempoIzquierda([rojoIzq3, TIEMPO_AMARILLO, verdeIzq3])

    this.semaforos[1][1].setTiemposDeCambio([rojo4, TIEMPO_AMARILLO, verde4])
    this.semaforos[1][1].setTiempoIzquierda([rojoIzq4, TIEMPO_AMARILLO, verdeIzq4])
  }

  toString () {
    return `Semaforo 1: ${this.semaforos[0][0].toString()} - Semaforo 2: ${this.semaforos[1][0].toString()} - Semaforo 3: ${this.semaforos[0][1].toString()} - Semaforo 4: ${this.semaforos[1][1].toString()}`
  }
}
