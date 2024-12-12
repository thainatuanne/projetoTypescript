export abstract class Animal {
    constructor(public nome: string, public som: string, public atividade: string) { }

    imprimir(): string {
        return `${this.nome} está emitindo o som: ${this.som} enquanto está ${this.atividade}`;
    }

    abstract comportamento(): void | string;

    // chamando diferente o array de animais usando return/console nos comandos
    static executarAcoes(animais: Animal[]): void {
        animais.forEach((animal) => {
            console.log(animal.imprimir());
            const resultado = animal.comportamento();
            if (typeof resultado === "string") { console.log(resultado);}
        });
    }
}

export class Cavalo extends Animal {
    constructor(public nome: string, public som: string, public atividade: string, public local: string) {
        super(nome, som, atividade);
    }

    comportamento(): string {
        return `${this.nome} está ${this.atividade} no ${this.local}`;
    }
}

export class Cachorro extends Animal {
    constructor(public nome: string, public som: string, public atividade: string, public cor: string) {
        super(nome, som, atividade);
    }

    comportamento(): string {
        return `${this.nome}, que é da cor ${this.cor}, está ${this.atividade}`;
    }
}

export class Gato extends Animal {
    constructor(public nome: string, public som: string, public atividade: string, public idade: number) {
        super(nome, som, atividade)
    }

    comportamento(): string {
        return `${this.nome}, com ${this.idade} anos, está ${this.atividade}.`;
    }
}