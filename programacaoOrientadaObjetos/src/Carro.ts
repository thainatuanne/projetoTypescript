export class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformações() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`)
    }
}