export class Semaforo {
  constructor () {
    // POSIBLES ESTADOS DEL SEMAFORO (ROJO, AMARILLO, VERDE)
    this.estado = ['rojo', 'amarillo', 'verde']
    // ESTADO ACTIVO DEL SEMAFORO (0, 1, 2) = (ROJO, AMARILLO, VERDE)
    this.estadoActivo = 0
    // REPRESENTA EL TIEMPO DE CAMBIO DE ESTADO AL SIGUIENTE DE CADA SEMAFORO EN SEGUNDOS
    this.tiempoDeCambio = [0, 0, 0]
  }

  cambiarEstado () {
    this.estadoActivo = (this.estadoActivo + 1) % 3
  };

  tiempoDeEspera () {
    return this.tiempoDeCambio[this.estadoActivo]
  }

  estadoActual () {
    return this.estado[this.estadoActivo]
  }

  // tiemposDeCambio = [0, 0, 12]

  setTiemposDeCambio (tiemposDeCambio) {
    this.tiempoDeCambio[0] = tiemposDeCambio[0]
    this.tiempoDeCambio[1] = tiemposDeCambio[1]
    this.tiempoDeCambio[2] = tiemposDeCambio[2]
  }
}

export class SemaforoCompuesto extends Semaforo {
  constructor () {
    super()
    this.tiempoDeCambioIzq = [0, 0, 0]
  }

  setTiempoIzquierda (tiemposDeCambio) {
    this.tiempoDeCambioIzq[0] = tiemposDeCambio[0]
    this.tiempoDeCambioIzq[1] = tiemposDeCambio[1]
    this.tiempoDeCambioIzq[2] = tiemposDeCambio[2]
  }

  toString () {
    return `Tiempo de espera: ${this.tiempoDeCambio} - Tiempo de espera izquierda: ${this.tiempoDeCambioIzq}`
  }
}
