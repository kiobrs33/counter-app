import  heroes from "../data/heroes";

// import  heroes , {owners} from "../data/heroes";

// console.log(owners);

//USANDO - FIND - Solo encuentra una coincidencia y se cierra el BUCLE
export const getHeroeById = (id) => {
    return heroes.find((item)=>item.id === id );
}
// console.log(getHeroeById(4));

//USANDO - FILTER - Encuentra varias coincidencias coincidencias
export const getHeroeByOwner = (owner) => {
    return heroes.filter((item)=>item.owner === owner );
}
// console.log(getHeroeByOwner('Marvel'));