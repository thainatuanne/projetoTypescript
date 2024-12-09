export class Calculadora {
    historico: string[] = [];

    constructor(historicoInicial: string[] = []) {
        this.historico = historicoInicial;
        console.log(`Calculadora iniciada...`);
    }

    somar(a: number, b: number): number {
        return this.registrarHistorico(a, b, '+', a + b);
    }

    subtrair(a: number, b: number): number {
        return this.registrarHistorico(a, b, '-', a - b);
    }

    multiplicar(a: number, b: number): number {
        return this.registrarHistorico(a, b, '*', a * b);
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            const mensagem = `Divisão por zero: ${a} / ${b} = Erro`;
            this.historico.push(mensagem);
            return NaN;
        }
        return this.registrarHistorico(a, b, '/', a / b);
    }

    private registrarHistorico(a: number, b: number, operacao: string, resultado: number): number {
        this.historico.push(`${a} ${operacao} ${b} = ${resultado}`);
        return resultado;
    }

    visualizarHistorico() {
        console.log(`Histórico de operações:`);

        this.historico.length ? this.historico.forEach((registro, index) => console.log(`${index + 1}. ${registro}`)) : console.log(`O histórico está vazio.`);
    }
}