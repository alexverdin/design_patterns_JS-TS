/** Herencia
 * La herencia nos sirve para "reutilizar código",
 * haciendo referencia a una clase ya creada.
 * 
 * Para utilizar la herencia entre archivos
 * es necesario agregar `type="module"`a la etiqueta script de nuestro HTML:
 * <script src='herencia.js' type="module"></script>
*/

// importamos las clases que nos interesan del archivo "objetos.js"
import { Drink, Drink2 } from "./objetos.js";

// creamos un objeto de cada clase y probamos que la importación sea exitosa
const test = new Drink("Mate (herencia)");
const test2 = new Drink2("Mate (herencia, func.)");
console.log(test.info());
console.log(test2.info());


class Alcoholic extends Drink{
    constructor(name, alcohol){
        super(name); // llama al constructor del padre y le envía el parámetro que requiera
        this.alcohol = alcohol;
    }
    //podemos utilizar los métodos del padre utilizando la palabra reservada "super"
    moreInfo(){
        return super.info() + ", su grado de alcohol es: " + this.alcohol + "°";
    }
}

// Por medio de la herencia, podemos agregar metodos (moreInfo) a la nueva clase,
// reutilizando los que ya tenemos y sin necesidad de alterar la clase original
const hidromiel = new Alcoholic("Hidromiel", 11.5);
console.log(hidromiel.moreInfo());

