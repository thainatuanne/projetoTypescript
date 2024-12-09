export class Contador {
    valor;

    constructor(valorInicial = 0) {
        this.valor = valorInicial;
        console.log(`Contador iniciado com o valor: ${this.valor}`);
    }

    zerar() {
        this.valor = 0;
        console.log(`Contador zerado.`);
    }

    incrementar() {
        this.valor++;
        console.log(`Contador incrementado. Valor atual: ${this.valor}`);
    }

    obtemValor() {
        return this.valor;
    }
}
