import {getUser, getUser2} from '../../base/05-funciones';

describe('Pruebas en 05-Funciones', () => {
    test('getUser debe retornar un usuario', () => {
        const userTest = {
            id:'1',
            nombre:'Jose',
            apellidos:'Perez',
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUser2 debe recibir y retornar los datos del Usuario', () => {
        const userTest = {
            id:'1',
            nombre:'Jose Edgard',
            apellidos:'Lozano Cueva',
        };

        const user = getUser2(
            userTest.id,
            userTest.nombre,
            userTest.apellidos,
        );

        expect(user).toEqual(userTest);
    })
    
    
})
