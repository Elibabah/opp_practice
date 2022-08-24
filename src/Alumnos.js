class Alumnos {
    constructor() {}

    califBaja(array) {
        return Math.min(...array)
    }

    califAlta(array) {
        return Math.max(...array)
    }
}



let calificaciones = new Alumnos


let calificacionBaja = calificaciones.califBaja([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ])
let calificacionAlta = calificaciones.califAlta([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// module.exports = baja.califBaja;
export const sumar = (a, b) => a + b;