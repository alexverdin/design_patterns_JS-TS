/** Herencia:
 * La herencia en TS es similar a la herencia en JS,
 * con la diferencia de que hay que respetar los tipos de dato que se reciben
 * y los que se retornan en las funciones
 */

// Creamos una clase Drink y la exportamos, para permitir la herencia entre archivos
export class Drink{

    name: string;

    constructor(name: string){
        this.name = name;
    }

    info(): string{
        return this.name;
    }
}