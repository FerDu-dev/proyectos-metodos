// Clase interseccion que tendra un grupo de semaforos LOS CUALES CONTROLAN EL FLUJO DE VEHICULOS DE UNA INTERSECCION
export class Interseccion {
  constructor () {
    this.semaforos = []
  }

  agregarSemaforo (semaforo) {
    this.semaforos.push(semaforo)
  }
}

// Pares de semaforos es un arreglo de arreglos en donde cada arreglo interno representa un par de semaforos que estan defrente
// [[semaforo1, semaforo3], [semaforo2, semaforo4]]
export class InterseccionCompuesta {
  constructor (paresDeSemaforos) {
    this.semaforos = paresDeSemaforos
  }
}
