const radioDiana = 170;

function calcularPuntaje(x, y) {
    const distanciaAlCentro = Math.sqrt(x * x + y * y);
    if (distanciaAlCentro > radioDiana) {
        return 0;
    } else {
        return Math.max(0, 100 - Math.floor(distanciaAlCentro / 10) * 10);
    }
}

export function simularLanzamiento() {
    const x = Math.random() * radioDiana * 2 - radioDiana;
    const y = Math.random() * radioDiana * 2 - radioDiana;
    const puntaje = calcularPuntaje(x, y);
    return {x, y, puntaje};
}