// const baja = require('./Alumnos');

// test('La calificación más baja debería ser 2', () => {
//     expect(baja()).toBe("Hola");
// });

import { sumar } from "./Alumnos";

describe('Operaciones matemáticas', () => {
    test('Realizamos la suma', () => {
        expect(sumar(1, 1)).toBe(2);
    });
})