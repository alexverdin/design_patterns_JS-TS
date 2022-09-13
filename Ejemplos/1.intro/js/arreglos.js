/** Los arreglos son colecciones de datos, son objetos que pueden almacenar  un listado de elementos.
 * En JS, los arrays tienen sus propias funciones ya definidas.
 * La mayoía de las funciones de arreglos reciben otras funciones como parámetros, por lo tanto, son
 * funciones de orden superior.
 * Las funciones predeterminadas de los array toman cada elemento del arreglo como un parámetro
 * y lo pasan a la función de primer orden que nosotros le pasamos.
 */

const names = ["Alex", "Ruth", "Victoria"];
const numbers = [5, 4, 7, 1, 10];
let arrayNew = [];
console.log(arrayNew);

// foreach():
// Recibe una función de primer orden y la ejecuta una vez por cada elemento del arreglo.
// Es una función que NO RETORNA valores.
// Es un método Inmutable (no modifica el arreglo original).
// Es un método que no retorna valores, sólo ejecuta la función que se le envió.
console.log("=== forEach() ===");

names.forEach((name) => console.log(name)); // Alex Ruth Victoria
names.forEach((name) => console.log(name.toUpperCase())); // ALEX RUTH VICTORIA
arrayNew = names.forEach((name) => name.toUpperCase()); // Al ser una funcion de orden superior, no se almacena en la variable
console.log(names); // Array(3): ["Alex", "Ruth", "Victoria"];
console.log(arrayNew); // UNDEFINED

// map():
// Recibe una funcion de primer órden y la ejecuta una vez por cada elemento del arreglo.
// Es una función que RETORNA un objeto con un valor por cada ciclo que realiza.
// map modifica cada elemento del array y devuelve un nuevo array con dichos elementos modificados.
// Es un método Imutable.
console.log("=== map() ===");

arrayNew = names.map((name) => name.toUpperCase()); // almacena ALEX RUTH VICTORIA dentro de la variable "arrayNew"
console.log(Array.isArray(arrayNew)); // true
console.log(arrayNew); // Array(3): ["ALEX", "RUTH", "VICTORIA"];

// reduce():
// Recibe una funcion de primer órden con DOS parámetros y un valor inicial (opcional).
// OJO: Si no le damos valor inicial a la función, tomará el 1er valor del arreglo como valor inicial.
// Realiza un acumulado por cada elemento del arreglo, almacenándolo en el primer parámetro de la función de 1er orden
// Retorna un único valor final, con el acumulado del resultado de la función, con respecto de los valores del arreglo.
// Es un método Imutable.
console.log("=== reduce() ===");
let total = numbers.reduce(function contar(acumulador, arrayValue){
    return acumulador + arrayValue
}, 50); // .reduce( funcion, valor inicial)

let total2 = numbers.reduce((acumulador, arrayValue) => acumulador + arrayValue, 0); // .reduce( funcion, valor inicial)

console.log(total); // 77
console.log(total2); // 27


total = numbers.reduce((acc,num) => acc * num); // multiplica cada valor por el valor siguiente.
console.log(total); // 1400
