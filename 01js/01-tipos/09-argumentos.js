// *a* se comportara como una variable para 
// usarse en el codigo

// este es un parametro ya que se referencia a un valor dentro de la funcion
function suma(a,sp){
    return a + sp;
}

// esto es un argumento - se le pasa un valor dentro de la funcion
let resultado = suma(8, 6);
console.log(resultado);

console.log(typeof suma);
/////////////////////////////////////////////

console.log('parte 2')
// para agregar mas argumentos no necesariamente 3 o 4
function sumador (b,d){
    console.log(arguments);
    return b + d;
}

let respuesta = suma(1,2,3,4,5)
console.log(respuesta);


