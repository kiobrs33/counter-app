import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Probando Promesas o Evento Asyncronos', () => {

    //Se usa el argumento DONE(Callback) para esperar los eventos ASync
    test('Debe retornar un héroe Async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes[0]);
                console.log(heroe);
                done();
            });
    });

    //Se usa el argumento DONE(Callback) para esperar los eventos ASync
    test('Debe retornar un Error cuando el héroe no existe', (done) => {
        const id = 14;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se encontro el Item!');
                done();
            });
    })
    
});
