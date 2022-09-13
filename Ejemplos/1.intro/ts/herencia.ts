/** Implementación de Interfaces
 * Heredamos una clase y una interfaz desde diferentes archivos.
 */

import {Drink} from './drinks'; // herencia de la clase'Drink'.
import {Product} from './interfaces'; // herencia de la interfaz 'Product'.

// herencia
class Beer extends Drink implements Product{
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number){
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
    return `El precio de la cerveza ${this.name} es: $${this.price}`;
    }
    info(): string {
        return `${this.name} ${this.alcohol}`
    }
}

// Interfaz sin herencia de otra clase
// como podemos notar, hemos creado un metodo "getPrice()" diferente al implementado en
// la clase 'Beer'.
// En una interfaz se debe cumplir con la estructura, pero no necesariamente debe tener metodos
// que se comporten igual.
class Snack implements Product{
    name: string;
    price: number;
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    getPrice(): string{
        return `El precio de este snack es: $${this.price}`
    }
}
//const cheetos = new Snack("Flamin' hot", 10);
//console.log(cheetos.getPrice());

const productList: Product[] = [
    new Beer("Colimita", 8.5, 65.5),
    new Snack("Cheetos", 10),
    new Beer("Heineken", 5, 42)
]

function getPrices(items: Product[]){
    for(const item of items){
        console.log(item.getPrice());
    }
}

getPrices(productList);