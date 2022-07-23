import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02 Template String', () => {
    test('getSaludo debe retornar Hola Rene', () => {
        const nombre = 'Rene';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
    })

    test('getSaludo debe retornar Hola Carlos!, si no tiene argumentos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola Carlos!`);
    })
})
