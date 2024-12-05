export class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Novo saldo atualizado R$ ${this.saldo}`)
        } else {
            console.log(`Saldo insuficiente para saque de R$ ${valor}. Saldo disponível na conta R$ ${this.saldo}`)
        }
    }

    depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso. Novo saldo atualizado R$ ${this.saldo}`)
        } else {
            console.log(`Valor de R$ ${valor} para depósito inválido. São permitidos apenas valores positivos.`)
        }
    }

    mostrarSaldo() {
        console.log(`Saldo atual de R$ ${this.titular} : R$ ${this.saldo} disponível`)
    }
}