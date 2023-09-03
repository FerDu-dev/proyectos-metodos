import { SemaforoCompuesto } from '../Logic/Class/Semaforo'
import { ControladorCompuesto } from '../Logic/Class/Controlador.js'
import { InterseccionCompuesta } from '../Logic/Class/Interseccion.js'

const semaforo1 = new SemaforoCompuesto()
const semaforo2 = new SemaforoCompuesto()
const semaforo3 = new SemaforoCompuesto()
const semaforo4 = new SemaforoCompuesto()

const interseccion1 = new InterseccionCompuesta([[semaforo1, semaforo3], [semaforo2, semaforo4]])

const controlador = new ControladorCompuesto(interseccion1)
controlador.sincronizarSemaforos([[16, 8], [12, 6]])

export { controlador }
