export class Pessoa {
    nome: string = 'Sem Nome';
    idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    dizerOla() {
        console.log(`Olá, meu nome pe ${this.nome} e tenho ${this.idade}`)
    }

}