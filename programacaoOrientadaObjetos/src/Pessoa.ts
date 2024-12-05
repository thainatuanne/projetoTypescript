// export class Pessoa {
//     nome: string = 'Sem Nome';
//     idade: number = 0;

//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     dizerOla() {
//         console.log(`Olá, meu nome pe ${this.nome} e tenho ${this.idade}`)
//     }

// }

export class Pessoa {
    nome: string;
    idade: number;


    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDetalhes() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

    calculoIdade() {
        const diasPorAno = 365;
        const idadeEmDias = this.idade * diasPorAno;
        console.log(`Minha idade em dias é ${idadeEmDias}`)

        return idadeEmDias
    }
}