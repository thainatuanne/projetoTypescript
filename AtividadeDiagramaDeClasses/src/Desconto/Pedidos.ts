import { ValorPedido } from "./Desconto";
import { ItemPedido } from "./ItemPedido";


export class Pedidos implements ValorPedido {
    itens: ItemPedido[] = [];

    adicionarItem(item: ItemPedido): void {
        this.itens.push(item);
    }

    recuperarValorTotal(): number {
        return this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        this.itens.forEach((item) => item.aplicarDescontoEmPorcentagem(desconto));
    }

    aplicarDescontoEmReais(desconto: number): void {
        const descontoPorItem = desconto / this.itens.length;
        this.itens.forEach((item) => item.aplicarDescontoEmReais(descontoPorItem));
    }

    removerItem(itemNome: string): void {
        const index = this.itens.findIndex((i) => i.nome === itemNome);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }

    listarItens(): void {
        console.log("Itens no pedido:");
        this.itens.forEach((item) => {
            console.log(
                `- ${item.nome}: R$ ${item.valor.toFixed(2)} (Quantidade: ${item.quantidade})`
            );
        });
    }
}