export class Aluno {
    constructor( public nome: string, public idade: number) {}

    apresentar() {
        console.log(`Aluno: ${this.nome}, Idade: ${this.idade}`)
    }
}

export class Turma {
    private alunos: Aluno[] = []
    constructor(public nome: string) {}
    
    adicionarAluno(nome: string, idade: number) {
        const aluno = new Aluno(nome, idade)
        this.alunos.push(aluno)
    }

    listarAlunos() {
        console.log(`Alunos da turma ${this.nome}: `)
        this.alunos.forEach(aluno => aluno.apresentar())
    }
}

const turmaA = new Turma('Matemática')
turmaA.adicionarAluno('Carla', 36)
turmaA.adicionarAluno('João', 40)
turmaA.adicionarAluno('Maria', 20)
turmaA.listarAlunos()