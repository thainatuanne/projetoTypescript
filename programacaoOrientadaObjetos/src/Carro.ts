// export class Carro {
//     marca: string;
//     modelo: string;
//     ano: number;

//     constructor(marca: string, modelo: string, ano: number) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }

//     exibirInformações() {
//         console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`)
//     }
// }

export class Carro {
    marca: string;
    modelo: string;
    ano: number | undefined;
    cor?: string | undefined;

    constructor(marca: string, modelo: string, ano: number = 0, cor?: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    definindoCor(cor: string) {
        this.cor = cor
    }

    mostrarDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor ? this.cor : 'Não especificada'}`);
    }
}