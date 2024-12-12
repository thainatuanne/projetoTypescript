export class Animal {
    constructor(private _nome: string, private _tipo: string) {}
    get nome(): string {
        return this._nome
    }

    set nome(novoNome: string) {
        this._nome = novoNome
    }

    get tipo(): string {
        return this._tipo
    }

    set tipo(novoTipo: string) {
        this._tipo = novoTipo
    }

    emitirSom() {
        console.log(`${this._nome} está emitindo um som!`);
    }
}

export class Gato extends Animal {
    private _comportamento: string
    constructor(nome: string, tipo: string, comportamento: string) {
        super(nome, tipo);
        this._comportamento = comportamento
    }

    get comportamento(): string {
        return this._comportamento
    }

    set comportamento(novoComportamento: string) {
        this._comportamento = novoComportamento
    }

    comportamentoEspecifico() {
        console.log(`${this.nome} está ${this._comportamento}`);
    }
}

const gato = new Gato("Mingau", "Felino", "se espreguiçando");
gato.emitirSom();
gato.comportamentoEspecifico();