export class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;

        console.log(`Bomba criada: \nTipo: ${this.tipoCombustivel} | Valor por litro: R$ ${this.valorLitro.toFixed(2)} | Combustível disponível: ${this.quantidadeCombustivel.toFixed(2)} litros`);
    }

    abastecerPorValor(valor: number) {
        const litros = valor / this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            console.log(`Não há combustível suficiente na bomba. | Combustível disponível: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
            return;
        }
        this.quantidadeCombustivel -= litros;
        console.log(`Você abasteceu ${litros.toFixed(2)} litros por R$ ${valor.toFixed(2)}. Combustível restante na bomba: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
    }

    abastecerPorLitro(litros: number) {
        if (litros > this.quantidadeCombustivel) {
            console.log(`Não há combustível suficiente na bomba. | Combustível disponível: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
            return 0;
        }
        const valorTotal = litros * this.valorLitro;
        this.quantidadeCombustivel -= litros;
        console.log(`Você abasteceu ${litros.toFixed(2)} litros por R$ ${valorTotal.toFixed(2)}. Combustível restante na bomba: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
        return litros;
    }

    alterarValor(novoValor: number) {
        this.valorLitro = novoValor;
        console.log(`O valor por litro foi alterado para: R$ ${this.valorLitro.toFixed(2)}.`);
    }

    alterarCombustivel(novoTipo: string) {
        this.tipoCombustivel = novoTipo;
        console.log(`O tipo de combustível foi alterado para: ${this.tipoCombustivel}.`);
    }

    alterarQuantidadeCombustivel(quantidadeAdicional: number) {
        if (quantidadeAdicional <= 0) {
            console.log(`Quantidade inválida. Você deve adicionar um valor positivo.`);
            return;
        }
        this.quantidadeCombustivel += quantidadeAdicional;
        console.log(`Adicionado ${quantidadeAdicional.toFixed(2)} litros à bomba. Combustível disponível agora: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
    }
}