export abstract class Ingresso {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    imprimeValor(): void {
        console.log(`Ingresso criado com sucesso! Valor do ingresso: R$${this.valor.toFixed(2)}`);
    }
}

export abstract class IngressoAdicional extends Ingresso {
    protected adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);
        this.adicional = adicional;
    }

    imprimeValor(): void {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor do ingresso adicional: R$${valorTotal.toFixed(2)}`);
    }
}

export class Normal extends Ingresso {
    constructor(valor: number) {
        super(valor);
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