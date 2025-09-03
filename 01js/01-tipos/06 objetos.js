// personajes
let nombre = "Cid";
let anime = "The eminense in shadow";
let edad =16;

let personaje = {
    nombre : "Cid",
    anime : "The eminense in shadow",
    edad: 16,

};

console.log(personaje);

// a cceder a las propiedades
console.log(personaje.nombre);
console.log(personaje['anime']);

// resignar valores
personaje.edad = 17;
personaje['edad']= 19;


// interar
let llave = 'edad';
personaje[llave] = 17


// eliminar propiedades de un objeto
delete personaje.anime

console.log(personaje);

