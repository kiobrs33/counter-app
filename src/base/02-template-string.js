//String y Concatenacion

// const nombre = 'Rene';
// const apellidos = 'Lozano Ramos';

//Forma tradicional o antigua
// const nombreCompleto = nombre + apellidos;

export const getSaludo = (nombre = 'Carlos!') => `Hola ${nombre}`;

//Forma recomendada y nueva
// const nombreCompleto2 = `${getSaludo(nombre, apellidos)} New ${1 + 2}`;

// console.log(nombreCompleto);
// console.log(nombreCompleto2);