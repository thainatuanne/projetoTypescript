import { BombaCombustivel } from './BombaCombustivel';

export class Carro {
    consumo: number;
    combustivel: number;

    constructor(consumo: number) {
        this.consumo = consumo;
        this.combustivel = 0;
        console.log(`Carro criado com consumo de ${this.consumo} km/l. \n Nível inicial de combustível: ${this.combustivel} litros.`);
    }

    adicionarGasolina(bomba: BombaCombustivel, litros: number) {
        const litrosAbastecidos = bomba.abastecerPorLitro(litros);
        if (litrosAbastecidos > 0) {
            this.combustivel += litrosAbastecidos;
            console.log(`Você adicionou ${litrosAbastecidos.toFixed(2)} litros ao carro. Combustível no tanque: ${this.combustivel.toFixed(2)} litros.`);
        }
    }

    andar(distancia: number) {
        const combustivelNecessario = distancia / this.consumo;
    
        if (combustivelNecessario > this.combustivel) {
            console.log(`Você não tem combustível suficiente para andar ${distancia} km.`);
            return;
        }

        this.combustivel -= combustivelNecessario;
        console.log(`Você andou ${distancia} km. Combustível restante no carro: ${this.combustivel.toFixed(2)} litros.`);
    }

    obterGasolina(): number {
        console.log(`Nível atual de combustível no carro: ${this.combustivel.toFixed(2)} litros.`);
        return this.combustivel;
    }
}