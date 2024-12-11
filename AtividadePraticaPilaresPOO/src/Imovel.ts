export abstract class Imovel {
    constructor(private _endereco: string, protected _preco: number) { }

    get endereco(): string {
        return this._endereco;
    }

    set endereco(novoEndereco: string) {
        this._endereco = novoEndereco;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(novoPreco: number) {
        this._preco = novoPreco;
    }

    imprimirResultado(): void {
        console.log(`Endereço: ${this._endereco}, Preço: R$ ${this._preco.toFixed(2)}`);
    }
}


export class Novo extends Imovel {
    constructor(endereco: string, preco: number, private _adicional: number) {
        super(endereco, preco);
    }

    get adicional(): number {
        return this._adicional;
    }

    set adicional(novoAdicional: number) {
        this._adicional = novoAdicional;
    }

    imprimirResuldado(): void {
        const precoFinal = this.preco + this._adicional;
        console.log(
            `Endereço: ${this.endereco}, Preço normal: R$${this.preco.toFixed(2)}, Preço com adicional: R$${precoFinal.toFixed(2)}`
        );
    }
}

export class Velho extends Imovel {
    constructor(endereco: string, preco: number, private _desconto: number) {
        super(endereco, preco);
    }

    get desconto(): number {
        return this._desconto;
    }

    set desconto(novoDesconto: number) {
        this._desconto = novoDesconto;
    }

    imprimirResuldado(): void {
        const precoFinal = this.preco - this._desconto;
        console.log(
            `Endereço: ${this.endereco}, Preço normal: R$${this.preco.toFixed(2)}, Preço com desconto: R$${precoFinal.toFixed(2)}`
        );
    }
}
