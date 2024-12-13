import { ICliente } from "./ICliente";

export class Cliente implements ICliente {
    constructor(
        public id: number,
        public nome: string,
        public telefone: string,
        public email: string
    ) {}

    imprimirDados(): void {
        console.log(`Cliente: ${this.nome} (Telefone: ${this.telefone}, Email: ${this.email})`);
    }
}