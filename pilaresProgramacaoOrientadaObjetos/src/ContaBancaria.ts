export class ContaBancaria {
    constructor (private _numeroConta: string, private _saldo: number) {
        
    }
    

    public get numeroConta(): string {
        return this._numeroConta
    }

    public get saldo(): number {
        return this._saldo
    }

    public set saldo(valor: number) {
        if (valor < 0) { // Permite saldo zero, mas impede valores negativos
            console.log(`O saldo não pode ser negativo.`);
            return;
        }
        this._saldo = valor;
    }
    
}

export class ContaCorrente extends ContaBancaria {
    private _chequeEspecial: number
    
    constructor(numeroConta: string, saldo: number, chequeEspecial: number) {
        super(numeroConta, saldo)
        this._chequeEspecial = chequeEspecial
        console.log(`Conta Corrente criada com cheque especial de R$ ${this._chequeEspecial}`);
    }

    public get chequeEspecial(): number {
        return this._chequeEspecial
    }

    public set chequeEspecial(valor: number) {
        if(valor < 0) {
            console.log(`O limite do cheque especial não pode ser negativo`)
            return
        }
        this._chequeEspecial = valor
    }

    public usarChequeEspecial(valor: number) {
        const limiteDisponivel = this.saldo + this._chequeEspecial
        
        if(valor > 0 && valor <= limiteDisponivel) {
            this.saldo -= valor
            console.log(`Uso de cheque especial no valor de R$ ${valor} realizado com sucesso. | Saldo atual: R$ ${this.saldo}`)
        } else {
            console.log(`Valor excede o limite disponível.`)
        }
    }
}

export class ContaPoupanca extends ContaBancaria {
    constructor(numeroConta: string, saldo: number) {
        super(numeroConta, saldo)
        console.log(`Conta Poupança criada com sucesso!`);
    }

    public calcularJuros(taxa: number) {
        if(taxa > 0) {
            const juros = this.saldo * (taxa / 100)
            this.saldo += juros
            console.log(`Juros de R$ ${juros.toFixed(2)} aplicados. | Saldo atual: R$ ${this.saldo}`)
        } else {
            console.log(`A taxa de juros deve ser positiva.`)
        }
    }
}