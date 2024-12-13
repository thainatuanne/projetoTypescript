import { ICliente } from './ICliente';
import { IAparelho } from './IAparelho';

export interface IOrdemDeServico {
    cliente: ICliente;
    aparelho: IAparelho;
    descricaoServico: string;
    valor: number;
    dataEntrega: Date;

    imprimirResumo(): void;
}