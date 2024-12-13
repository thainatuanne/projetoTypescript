import { IOrdemDeServico } from './IOrdemDeServico';
import { ICliente } from './ICliente';
import { IAparelho } from './IAparelho';

export interface IOficina {
    registrarOrdem(
        cliente: ICliente,
        aparelho: IAparelho,
        descricaoServico: string,
        valor: number,
        dataEntrega: Date
    ): void;

    listarOrdens(): IOrdemDeServico[];
}