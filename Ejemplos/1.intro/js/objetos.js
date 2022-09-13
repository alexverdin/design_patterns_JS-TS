// Objetos en JS

/** Clases:
 * Una clase es un "molde" que sirve para estructurar un objeto.
 * Tiene propiedades (color, tamaño, cantidad de puertas...)
 * Tiene métodos (se puede manejar, se puede encender, apagar, etc.)
 * "constructor" es un método que se ejecuta en el momento que se crea un objeto de dicha clase.
 */

// Clase: Bebida
// Métodos: constructor
// "this" es una palabra reservada que hace referencia al objeto que se está creando, en este caso, "Drink"

// la palabra "export" indica que la clase se puede exportar como un módulo
// esto permite que podamos heredar la clase 'Drink' a otros archivos.
export class Drink{
    constructor(name){
        this.name = name;
    }

    info(){
        return "La bebida es: " + this.name;
    }

}

const drink = new Drink("agua");
console.log(drink.info());

/** Funciones:
 * Las clases no son las únicas maneras de crear objetos.
 * En JS toda función en sí misma es un objeto.
 */

export function Drink2(name){
    this.name = name;
    this.info = function(){
        return "La bebida (func) es: " + this.name;
    }
}

const drink2 = new Drink2("agua");
console.log(drink2.info());