import { Animal } from "./Animal";

export class Gato implements Animal {
    constructor(
        public nome: string,
        public som: string,
        public atividade: string,
        public idade: number
    ) { }

    imprimir(): void {
        console.log(`${this.nome} está emitindo o som: ${this.som} enquanto está ${this.atividade}.`);
    }

    comportamento(): void {
        console.log(`${this.nome}, com ${this.idade} anos, está ${this.atividade}.`);
    }
}
