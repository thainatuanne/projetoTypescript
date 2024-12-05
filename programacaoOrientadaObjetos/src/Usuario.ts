// export class Usuario {
//     nome!: string;       // Propriedade obrigatória
//     idade!: number;      // Propriedade obrigatória
//     email?: string;      // Propriedade opcional

//     saudacao(): void {
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
//     }

//     obterNome(): string {
//         return this.nome;
//     }

//     atualizarNome(novoNome: string) {
//         this.nome = novoNome; // Atualiza a propriedade nome com o novo valor
//         return this.nome;     // Retorna o novo nome atualizado (opcional)
//     }
// }

// const usuario1 = {
//     nome: 'Carla',
//     idade: 36,
//     email: 'carla@gmail.com'
// }

// console.log(`Olá, meu nome é ${usuario1.nome} e tenho ${usuario1.idade}`)

export class Usuario {
    nome: string;
    idade?: number; // Propriedade opcional
    email?: string; // Propriedade opcional

    constructor(nome: string, idade?: number, email?: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    mostrarInfos() {
        console.log(`Nome: ${this.nome}`);
        if (this.idade !== undefined) {
            console.log(`Idade: ${this.idade}`);
        }
        if (this.email !== undefined) {
            console.log(`Email: ${this.email}`);
        }
    }
}
