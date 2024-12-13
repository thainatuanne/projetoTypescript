import { FormatoElemento } from "./FormatoElemento";

export class Circulo implements FormatoElemento {
    constructor(public raio: number) { }

    desenhar(): void {
        console.log(`Desenhando um círculo com raio ${this.raio}`);
    }

    redimensionar(novoRaio: number): void {
        if (novoRaio <= 0) {
            console.error("O raio deve ser maior que zero.");
            return;
        }
        this.raio = novoRaio;
        console.log(`Círculo redimensionado para raio ${this.raio}`);
    }
}
