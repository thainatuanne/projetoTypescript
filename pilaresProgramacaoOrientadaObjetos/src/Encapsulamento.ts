// Exemplo de encapsulamento
export class Exemplo {
    constructor(public variavelPublica: string, private variavelPrivada: number) {}

    mostrarDetalhes() {
        console.log(`Variavel Pública: ${this.variavelPublica}`);
        console.log(`Variavel Privada: ${this.variavelPrivada}`);
    }
}

// Conta Bancária com encapsulamento e validação
export class ContaBancarias {
    constructor(private _valor: number) {}

    get valor(): number {
        return this._valor;
    }

    set valor(novoValor: number) {
        if (novoValor >= 0) {
            this._valor = novoValor;
        } else {
            console.log("O valor não pode ser negativo.");
        }
    }
}

// Pessoa com encapsulamento e validação de idade
export class Pessoa {
    constructor(private _idade: number) {}

    public get idade(): number {
        return this._idade;
    }

    public set idade(idade: number) {
        if (idade < 0) {
            console.log("Idade inválida. Não pode ser negativa.");
            return;
        }
        this._idade = idade;
    }
}