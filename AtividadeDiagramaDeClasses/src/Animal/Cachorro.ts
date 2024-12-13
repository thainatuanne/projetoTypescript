import { Animal } from "./Animal";

export class Cachorro implements Animal {
    constructor(
        public nome: string,
        public som: string,
        public atividade: string,
        public cor: string
    ) { }

    imprimir(): void {
        console.log(`${this.nome} está emitindo o som: ${this.som} enquanto está ${this.atividade}.`);
    }

    comportamento(): void {
        console.log(`${this.nome}, que é da cor ${this.cor}, está ${this.atividade}.`);
    }
}
