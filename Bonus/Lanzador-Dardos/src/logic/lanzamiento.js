const radioDiana = 180;
const radioDos = 127;
const radioTres = 65.5;
const centro = 15.9;

function calcularPuntaje(x, y) {
    let value = 0
    const distanciaAlCentro = Math.sqrt(x * x + y * y);
    if (distanciaAlCentro > radioDiana) {
        value = 0;
    } else {
        if(distanciaAlCentro <= radioDiana){
            value = 10;
            if(distanciaAlCentro <= radioDos){
                value = 40;
                if(distanciaAlCentro <= radioTres){
                    value = 70;
                    if(distanciaAlCentro <= centro){
                        value = 100;
                    }

                }
            }
        }
    }
    return value;
}

export function simularLanzamiento() {
    const x = Math.random() * radioDiana * 2 - radioDiana;
    const y = Math.random() * radioDiana * 2 - radioDiana;
    const puntaje = calcularPuntaje(x, y);
    return {x, y, puntaje};
}