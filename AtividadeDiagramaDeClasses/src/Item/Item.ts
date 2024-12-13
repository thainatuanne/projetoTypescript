export class Item {
    constructor(
        private _valor: number,
        private _nome: string,
        private _descricao: string
    ) {}

    get valor(): number {
        return this._valor;
    }

    set valor(novoValor: number) {
        if (novoValor > 0) {
            this._valor = novoValor;
        } else {
            console.error('O valor deve ser maior que 0.');
        }
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(novaDescricao: string) {
        this._descricao = novaDescricao;
    }

    imprimir(): void {
        console.log(`Item: ${this._nome}, Valor: R$${this._valor.toFixed(2)}, Descrição: ${this._descricao}`);
    }
}
