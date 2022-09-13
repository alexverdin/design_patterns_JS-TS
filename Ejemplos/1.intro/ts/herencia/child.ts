// herencia horizontal
import {Drink} from './father';

export class Alcohol extends Drink{
    grade: number;

    constructor(name = "Ethyl", grade = 3.5){
        super(name);
        this.grade = grade;
    }

    info(): string{
        return this.name + " " + this.grade;
    }

    getName(): string{
        return this.name;
    }
}
