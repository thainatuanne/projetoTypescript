export interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void;

    recuperarValorTotal(): number;
}

export interface ValorPedido {
    
    aplicarDescontoEmReais(desconto: number): void;
}
