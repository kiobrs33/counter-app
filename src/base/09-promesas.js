import {getHeroeById} from './08-import-export';

export const getHeroeByIdAsync = (id ) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const heroe = getHeroeById(id);

            if(heroe === undefined){
                reject('No se encontro el Item!')
            }else{
                resolve(heroe);
            }
        },2000);
    });
};
