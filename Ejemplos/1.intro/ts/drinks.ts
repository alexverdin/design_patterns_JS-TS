// herencia

export class Drink {

    name: string;

    constructor(name: string){
        this.name = name;
    }

    info(): string{
        return this.name;
    }

}