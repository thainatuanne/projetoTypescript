import { IOrdemDeServico } from './IOrdemDeServico';
import { ICliente } from './ICliente';
import { IAparelho } from './IAparelho';

export class OrdemDeServico implements IOrdemDeServico {
    constructor(
        public cliente: ICliente,
        public aparelho: IAparelho,
        public descricaoServico: string,
        public valor: number,
        public dataEntrega: Date
    ) {}

    imprimirResumo(): void {
        console.log(`=== Ordem de Serviço ===`);
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`Aparelho: ${this.aparelho.tipo} (${this.aparelho.marca} - ${this.aparelho.modelo})`);
        console.log(`Descrição: ${this.descricaoServico}`);
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
        console.log(`Data de Entrega: ${this.dataEntrega.toLocaleDateString()}`);
        console.log(`Status: ${this.aparelho.status}`);
    }
}