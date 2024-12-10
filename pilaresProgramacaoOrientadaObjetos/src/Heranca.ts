export class Animal {
    constructor(protected _nome: string, protected _tipo: string) {}

    emitirSom() {
        console.log(`Emitindo o som genérico do animal.`);
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
}

export class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome, 'Cachorro');
    }

    emitirSom(): void {
        console.log(`${this._nome} está latindo: Au au!`);
    }

    latir(): void {
        console.log(`${this._nome} está latindo feliz!`);
    }
}

export class Galo extends Animal {
    constructor(nome: string) {
        super(nome, 'Galo');
    }

    emitirSom(): void {
        console.log(`${this._nome} está cantando: Cocoricó!`);
    }

    cocar(): void {
        console.log(`${this._nome} está cocando a terra.`);
    }
}

export class Peixe extends Animal {
    constructor(nome: string, private _aguaSalgada: boolean) {
        super(nome, 'Peixe');
    }

    nadar(): void {
        console.log(`${this._nome} está nadando graciosamente.`);
    }

    tipoDeAgua(): string {
        return this._aguaSalgada ? `${this._nome} vive em água salgada.` : `${this._nome} vive em água doce.`;
    }
}



// HERANÇA CLASSES ABSTRATAS

// colocar abstract na frente da class
// ex abstract class Animal


// não pode instanciar uma classe abstrata
