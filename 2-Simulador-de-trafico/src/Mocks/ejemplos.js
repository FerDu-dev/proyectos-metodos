// Estructura para una condicion de 2 semaforos
// En donde la posicion [0] representa el tiempo en verde deseado para el semaforo 1
// Y la posicion [1] representa el tiempo en verde deseado para el semaforo 2
const condiciones1 = [16, 12]

// Estructura para una condicion de 4 semaforos
// En donde la posicion [0][0] representa el tiempo en verde deseado para el semaforo 1 y 3
// Y la posicion [0][1] representa el tiempo en verde para que los carros circulen a la derecha
// Y la posicion [1][0] representa el tiempo en verde deseado para el semaforo 2 y 4
// Y la posicion [1][1] representa el tiempo en verde para que los carros circulen a la derecha
const condiciones2 = [[16, 8], [12, 6]]

export { condiciones1, condiciones2 }
