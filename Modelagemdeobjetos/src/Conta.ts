export class Conta {
    numeroConta: number;
    nomeCorrentista: string;
    saldo: number;

    constructor(numeroConta: number, nomeCorrentista: string, saldo: number = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;

        saldo = 0;

        console.log(`Conta Corrente criada com sucesso! \n Bem vindo ${this.nomeCorrentista} | Seu número da conta é ${this.numeroConta} | Saldo Inicial: R$ ${this.saldo}`)
    }

    alterarNome(novoNome: string) {
        this.nomeCorrentista = novoNome;
        console.log(`Nome do correntista alterado para ${novoNome}`)
    }

    deposito(valor: number) {
        if (valor <= 0) {
            console.log(`Depósito inválido: R$ ${valor}`);
            return;
        }

        this.saldo += valor;
        console.log(`Depósito realizado: R$ ${valor}. Saldo atual: R$ ${this.saldo}`);
    }

    saque(valor: number) {
        if (valor <= 0) {
            console.log(`Valor de saque inválido: R$ ${valor}`);
            return;
        }
        if (valor > this.saldo) {
            console.log(`Saque de R$ ${valor} não permitido. Saldo insuficiente! Saldo em conta R$ ${this.saldo}`);
            return;
        }

        this.saldo -= valor;
        console.log(`Saque realizado: R$ ${valor}. Saldo atual: R$ ${this.saldo}`);
    }
}