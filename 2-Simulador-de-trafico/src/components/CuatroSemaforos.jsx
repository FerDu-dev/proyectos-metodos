import { controlador } from '../services/Controllers'
//Controlador es una instacia de la clase controladorCompuesto el cual ya se encuentra incializada y lista para trabajar
// tiene los semaforos con los tiempos de espera necesarios para no realizar colisiones en ninguno de sus puntos mientras
// se siga el siguiente ciclo.
// 1) Semáforos 2 y 4 permiten paso de frente o cruce hacia la derecha
// 2) Semáforos 1 y 3 permiten paso de frente o cruce hacia la derecha
// 3) Semáforos 2 y 4 solo pueden cruzar hacia la calle de la izquierda
// 4) Semáforos 1 y 3 solo pueden cruzar hacia la calle de la izquierda
// (Se repite el ciclo)

// falta colocar los 4 semáforos en la intercepción, tal como aparece en el canva y hacer el renderizado condicional de los colores
export default function CuatroSemaforos () {
    return (
        <div className="container">
            <div className='container-block'>

            </div>
            <div className="container-block"> 
            
            </div>
            <div className="container-block">

            </div>
            <div className="container-block">

            </div>
      </div>
    )
}