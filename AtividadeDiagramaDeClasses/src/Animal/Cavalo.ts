import { Animal } from "./Animal";

export class Cavalo implements Animal {
    constructor(
        public nome: string,
        public som: string,
        public atividade: string,
        public local: string
    ) { }

    imprimir(): void {
        console.log(`${this.nome} está emitindo o som: ${this.som} enquanto está ${this.atividade}.`);
    }

    comportamento(): void {
        console.log(`${this.nome} está ${this.atividade} no ${this.local}.`);
    }
}