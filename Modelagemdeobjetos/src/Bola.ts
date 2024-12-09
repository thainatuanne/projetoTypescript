export class Bola {
    cor: string;
    circunferencia: number;
    material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material

        console.log(`Bola criada com cor: ${this.cor}, circunferência: ${this.circunferencia} e material: ${this.material}`);
    }

    trocaCor(novaCor: string) {
        this.cor = novaCor;
        console.log(`A cor da bola foi trocada para: ${this.cor}`)

    }
    mostraCor() {
        return this.cor;
    }
} 




// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor