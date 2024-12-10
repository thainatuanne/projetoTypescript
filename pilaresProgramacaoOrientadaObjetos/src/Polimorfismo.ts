// POLIMORFISMO

export abstract class Animais {
    constructor(protected nome: string) {}

    abstract produzirSom(): void;
}

export class Vaca extends Animais {
    constructor(nome: string) {
        super(nome);
    }

    produzirSom(): void {
        console.log(`${this.nome} diz: Muuuu!`);
    }
}

export class Gato extends Animais {
    constructor(nome: string) {
        super(nome);
    }

    produzirSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }
}



