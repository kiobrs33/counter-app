import { getImagen } from "../../base/11-async-await";

describe('Probando Async Await', () => {
    test('Obtener la URL de la imagen', async() => {
        const urlImage = await getImagen();

        expect(urlImage.includes('https://')).toBe(true);
    }); 
});
