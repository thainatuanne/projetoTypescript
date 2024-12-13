import { Item } from './Item';

export class Pedido {
    private itens: Item[] = [];
    private valorTotal: number = 0;

    get listaItens(): Item[] {
        return this.itens;
    }

    get valorFinal(): number {
        return this.valorTotal;
    }

    adicionarItem(item: Item): void {
        this.itens.push(item);
        this.valorTotal += item.valor;
        console.log(`Item "${item.nome}" adicionado com sucesso!`);
    }

    removerItem(index: number): void {
        if (index >= 0 && index < this.itens.length) {
            const itemRemovido = this.itens.splice(index, 1)[0];
            this.valorTotal -= itemRemovido.valor;
            console.log(`Item "${itemRemovido.nome}" removido com sucesso!`);
        } else {
            console.error('Índice inválido. Não foi possível remover o item.');
        }
    }

    alterarItem(index: number, novoItem: Item): void {
        if (index >= 0 && index < this.itens.length) {
            const itemAntigo = this.itens[index];
            this.valorTotal = this.valorTotal - itemAntigo.valor + novoItem.valor;
            this.itens[index] = novoItem;
            console.log(`Item "${itemAntigo.nome}" alterado para "${novoItem.nome}".`);
        } else {
            console.error('Índice inválido. Não foi possível alterar o item.');
        }
    }

    imprimirPedido(): void {
        console.log('=== Detalhes do Pedido ===');
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$${item.valor.toFixed(2)}`);
        });
        console.log(`Valor Total: R$${this.valorTotal.toFixed(2)}`);
    }
}
