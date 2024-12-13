export interface ICliente {
    id: number;
    nome: string;
    telefone: string;
    email: string;

    imprimirDados(): void;
}
