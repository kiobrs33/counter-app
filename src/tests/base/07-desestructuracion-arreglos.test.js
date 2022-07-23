import { returnArreglo } from "../../base/07-desestructuracion-arreglos";

describe('Desestructuración de Arreglos', () => {
    test('', () => {
        const arr = returnArreglo();
        expect(arr).toEqual( ['ABC',123]);

        //Otra manera de comparar cada elemento del ARREGLO
        const [letras, numeros] = returnArreglo();

        //Comparación directa
        expect(letras).toBe('ABC');
        //Comparacion para evaluar el TIPO de DATO
        expect(typeof letras).toBe('string');

        //Comparación directa
        expect(numeros).toBe(123);
        //Comparacion para evaluar el TIPO de DATO
        expect(typeof numeros).toBe('number');

    })
    
})
