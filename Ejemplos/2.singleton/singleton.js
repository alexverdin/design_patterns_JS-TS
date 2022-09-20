/** Singleton:
 * El patrón de diseño Singleton se caracteriza por tener el objetivo de controlar
 *
 * que exista uno y solo un objeto (o instancia) de una clase.
 */

class Singleton{
    constructor(){

        if(Singleton.instance){ // si una instancia de Singleton ya existe, retorna dicha instancia.
            
            return Singleton.instance;
        }
        // si una instancia de Singleton aún no existe, es creada.
        
        Singleton.instance = this;
    }
}

const singleton = new Singleton(); // se crea una instancia de la clase Singleton

const singleton2 = new Singleton(); // Ya existe una instancia de Singleton(), se asigna la anteriormente creada a un nuevo objeto.
/**
 * Al haber una instancia de singleton ya creada,
 * en lugar de crear una nueva isntancia, se asigna la anteriormente creada
 * a la variable "singleton2"
 */

console.log(singleton === singleton2);