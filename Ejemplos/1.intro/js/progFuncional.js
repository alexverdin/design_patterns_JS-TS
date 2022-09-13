/** BASES DEL PARADIGMA FUNCIONAL */

/**
- Funciones de primer órden:
Son aquellas funciones que pueden ser tratadas como una variable.
Dicha variable puede guardar una función, puede ejecutar la función y puede ser enviada como parámetro a otras funciones.
*/

function sum(a, b){
    return a+b;
}

let res = sum(1,2);
console.log(res);

const fSum = sum; // la funcion sum se asigna a la variable fsum (hacer esto se considera crear una función anónima)
res = fSum(5,6); // fSum recibe parámetros diréctamente, como si de una funcion se tratase
console.log(res); // obtenemos el resultado sin problema.

/**
- Funciones de órden superior:
Son funciones que reciben a otras funciones como parámetros.
*/

function operation(fn, a, b){
    console.log("== HOF ==");
    console.log( fn(a,b) );
}
operation(fSum, 10, 20); // 30

/** 
- Funciones flecha (Arrow Functions):
Son funciones anonimas escritas de forma compacta, facilitando su lectura y escritura.
*/

let fA = () => console.log("Arrow function");
fA(); // "Arrow Function"

// Esta funcion flecha es equivalente a:
//let fA2 = function funcionAnonima() {
//   console.log("Arrow function");
//}


// Podemos usar las funciones de orden superior junto con las arrow function de la siguiente manera.
// Notemos que la función flecha está definida dentro de la función de orden superior,
// de modo que no es necesario darle un nombre o asignarla a una variable.
operation((a,b) => a*b, 5, 3); // "hacer algo" -- 15

operation((a, b) => {
    const c = a * b;
    return c*2;
}, 2,7); // "hacer algo" -- 28

