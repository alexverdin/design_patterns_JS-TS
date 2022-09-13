// La herencia en TS es muy similar a la herencia en JS
// usamos extend para heredar métodos de una clase padre a una clase hijo
// y usamos import/export para comunicarnos entre archivos.

import { SuperCall } from 'typescript';
import { Alcohol } from './child';

class Hidromiel extends Alcohol{
    private flavor: string;

    constructor(name: string, grade = 3.5, flavor: string){
        super(name, grade);
        this.flavor = flavor;
    }

    info(): string{
        return `${this.name} ${this.grade} ${this.flavor}`
    }
}

const testDrink = new Hidromiel("Ragnarok", undefined,"Natural");
const testDrink2 = new Hidromiel("Hidromiel", 11.5,"Natural");
console.log(testDrink.info());
console.log(testDrink2.info());