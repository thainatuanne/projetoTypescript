interface Animal {
    nome: string,
    emitirSom(): void
}

class Cachorro implements Animal {
    constructor(public nome: string) {}

    emitirSom() {
        console.log(`${this.nome} faz AU AU!`)
    }
}

const meuCachorro = new Cachorro('Totó')
meuCachorro.emitirSom()