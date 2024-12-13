import { IAparelho } from './IAparelho';

export class Aparelho implements IAparelho {
    constructor(
        public id: number,
        public tipo: string,
        public marca: string,
        public modelo: string,
        public status: string = 'Recebido'
    ) {}

    atualizarStatus(novoStatus: string): void {
        this.status = novoStatus;
        console.log(`Status do aparelho "${this.tipo}" atualizado para: ${this.status}`);
    }
}