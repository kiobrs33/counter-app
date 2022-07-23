import { getHeroeById, getHeroeByOwner } from "../../base/08-import-export";
import heroes from "../../data/heroes";

describe('Evaluar a 08-import-export', () => {
    test('Debe retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find((item)=> item.id === id );

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar UNDEFINED si el héroe no Existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    });

    test('Debe retornar solo HÉROES de DC', () => {
        const owner = 'DC';
        const heroes = getHeroeByOwner(owner);
        const heroesData = heroes.filter((item)=> item.owner === owner );
        
        expect(heroes).toEqual(heroesData);
    });

    test('Debe retornar solo 2 HÉROES de MARVEL', () => {
        const owner = 'Marvel';
        const numeroElementos = 2;
        const heroes = getHeroeByOwner(owner);
      
        expect(heroes.length).toBe(numeroElementos);
    });
})
