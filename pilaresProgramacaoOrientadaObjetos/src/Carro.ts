export class Carro {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {

        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    exibirInfos() {
        console.log(`Esse é um ${this.marca}, modelo ${this.modelo} e ${this.ano}`)
    }
}

