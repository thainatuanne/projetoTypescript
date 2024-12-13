export interface IAparelho {
    id: number;
    tipo: string;
    marca: string;
    modelo: string;
    status: string;

    atualizarStatus(novoStatus: string): void;
}
