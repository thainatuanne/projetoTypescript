export class Lutador {
    constructor(private _nome: string, private _peso: number) {}

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get peso(): number {
        return this._peso;
    }

    set peso(novoPeso: number) {
        if (novoPeso > 0) {
            this._peso = novoPeso;
        } else {
            console.error("O peso deve ser maior que 0.");
        }
    }

    apresentar() {
        console.log(`Lutador: ${this.nome}, Peso: ${this.peso}kg`);
    }
}

export class Luta {
    private desafiado: Lutador;
    private desafiador: Lutador;

    constructor(
        nomeDesafiado: string,
        pesoDesafiado: number,
        nomeDesafiador: string,
        pesoDesafiador: number
    ) {
        this.desafiado = new Lutador(nomeDesafiado, pesoDesafiado);
        this.desafiador = new Lutador(nomeDesafiador, pesoDesafiador);
    }

    iniciarLuta() {
        console.log('=== Início da Luta ===');
        this.desafiado.apresentar();
        this.desafiador.apresentar();
        console.log('=== Fim da Apresentação ===');
    }
}

const luta = new Luta('Bruce Lee', 70, 'Chuck Norris', 72);
luta.iniciarLuta();