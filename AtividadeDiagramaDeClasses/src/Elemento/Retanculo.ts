import { FormatoElemento } from "./FormatoElemento";

export class Retangulo implements FormatoElemento {
    constructor(public comprimento: number, public altura: number) { }

    desenhar(): void {
        console.log(`Desenhando um retângulo com comprimento ${this.comprimento} e altura ${this.altura}`)
    }

    redimensionar(fator: number): void {
        if (fator > 0) {
            this.comprimento *= fator;
            this.altura *= fator;
            console.log(`Retângulo redimensionado para comprimento ${this.comprimento} e altura ${this.altura}`);
        } else {
            console.error("O fator deve ser maior que zero.");
        }
    }
}