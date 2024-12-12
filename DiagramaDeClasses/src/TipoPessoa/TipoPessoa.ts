export abstract class TipoPessoa {
    protected abstract nome: string
    protected abstract sobrenome: string

    protected abstract nomeCompleto(): string
}

// export class PessoaInvalida extends TipoPessoa {
//     nomeCompleto(): string {
//         return ''
//     }
// } dá erro porque não foi impleementado

export class Pessoa extends TipoPessoa {
    constructor(protected nome: string, protected sobrenome: string) {
        super()
    }
   
    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa1 = new Pessoa('Maria', 'Silva')
console.log(pessoa1.nomeCompleto)
