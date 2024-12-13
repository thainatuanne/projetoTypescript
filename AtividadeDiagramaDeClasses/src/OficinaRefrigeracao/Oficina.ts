import { IOficina } from './IOficina';
import { IOrdemDeServico } from './IOrdemDeServico';
import { ICliente } from './ICliente';
import { IAparelho } from './IAparelho';
import { OrdemDeServico } from './OrdemDeServico';

export class Oficina implements IOficina {
    private ordensDeServico: IOrdemDeServico[] = [];

    registrarOrdem(
        cliente: ICliente,
        aparelho: IAparelho,
        descricaoServico: string,
        valor: number,
        dataEntrega: Date
    ): void {
        const ordem = new OrdemDeServico(cliente, aparelho, descricaoServico, valor, dataEntrega);
        this.ordensDeServico.push(ordem);
        console.log('Ordem de serviço registrada com sucesso!');
    }

    listarOrdens(): IOrdemDeServico[] {
        console.log('=== Ordens de Serviço ===');
        this.ordensDeServico.forEach((ordem, index) => {
            console.log(
                `${index + 1}. Cliente: ${ordem.cliente.nome}, Aparelho: ${ordem.aparelho.tipo}, Serviço: ${ordem.descricaoServico}`
            );
        });
        return this.ordensDeServico;
    }
}
