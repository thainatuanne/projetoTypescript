export class Produto {
    nome: string;
    preco: number;
    desconto: number | undefined

    constructor(nome: string, preco: number, desconto?: number) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto ?? 0
    }

    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`)
    }

    mostrarPrecoComDesconto() {
        const precoFinal = this.preco - (this.preco * (this.desconto ?? 0) / 100)
        console.log(`O preço de ${this.nome} com desconto é ${precoFinal}`)
    }
}
