export class CarteiraDinherio {
    saldo: number
    transacoes: { tipo: string; valor: number; data: Date }[]

    constructor() {
        this.saldo = 0;
        this.transacoes = [];
    }

    lancarEntrada(valor: number) {
        if (valor <= 0) {
            console.error(`O valor da entrada deve ser maior que zero.`)
            return
        }

        this.saldo += valor
        this.transacoes.push({ tipo: 'Entrada', valor, data: new Date() })
        console.log(`Entrada de R$ ${valor.toFixed(2)} registrada com sucesso! Saldo atual R$ ${this.saldo.toFixed(2)}`)
    }

    lancarSaida(valor: number) {
        if (valor <= 0) {
            console.log(`O valor da saída deve ser maior que zero`)
            return
        }

        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para realizar a saída`)
            return
        }

        this.saldo -= valor
        this.transacoes.push({ tipo: 'Saída', valor, data: new Date() })
        console.log(`Saída de R$ ${valor.toFixed(2)} registrada com sucesso! Saldo atual: R$ ${this.saldo.toFixed(2)}`)
    }

    exibirHistorico() {
        console.log(`\n Histórico de Transações:`)
        this.transacoes.forEach((transacao, index) => {
            console.log(
                `${index + 1}. ${transacao.tipo} - RS ${transacao.valor.toFixed(2)} em ${transacao.data.toLocaleDateString()}`
            )
        })

        console.log(`Saldo final: R$ ${this.saldo.toFixed(2)}`)
    }
}

const minhaCarteira = new CarteiraDinherio()

minhaCarteira.lancarEntrada(500)
minhaCarteira.lancarSaida(200)
minhaCarteira.lancarSaida(500)
minhaCarteira.lancarEntrada(1000)
minhaCarteira.lancarSaida(200)

minhaCarteira.exibirHistorico()



// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.