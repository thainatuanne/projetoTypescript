import { Desconto, ValorPedido } from "./Desconto"

export class ItemPedido implements Desconto, ValorPedido {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(nome: string, valor: number, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const descontoUnitario = (this.valor * desconto) / 100;
        this.valor -= descontoUnitario;
    }

    aplicarDescontoEmReais(desconto: number): void {
        const descontoUnitario = desconto / this.quantidade;
        this.valor -= descontoUnitario;
    }
}  