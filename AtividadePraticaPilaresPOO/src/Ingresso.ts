export abstract class Ingresso {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    abstract imprimeValor(): void
}

export class Normal extends Ingresso {
    constructor(valor: number) {
        super(valor);
    }

    imprimeValor() {
        console.log(`Valor do ingresso normal: R$${this.valor.toFixed(2)}`);
    }
}

export class IngressoAdicional extends Ingresso {
    protected adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);
        this.adicional = adicional;
    }

    imprimeValor() {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor do ingresso adicional: R$${valorTotal.toFixed(2)}`);
    }
}

export class VIP extends IngressoAdicional {
    constructor(valor: number, adicional: number) {
        super(valor, adicional);
    }

    imprimeValor() {
        console.log(`Valor do ingresso VIP: R$${(this.valor + this.adicional).toFixed(2)}`);
    }
}

export class Camarote extends IngressoAdicional {
    constructor(valor: number, adicional: number) {
        super(valor, adicional);
    }

    imprimeValor() {
        console.log(`Valor do ingresso Camarote: R$${(this.valor + this.adicional).toFixed(2)}`);
    }
}