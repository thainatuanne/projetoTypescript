export class Turma {
    alunos: Aluno[] = []
    constructor(
        private _id: string, private _edicao: number, private _programa: string
    ){}

    get id(): string {
        return this._id
    }

    get edicao(): number {
        return this._edicao
    }

    get programa(): string {
        return this._programa
    }

    get Alunos(): Aluno[] {
        return this.alunos
    }

    listarAluno(): void {
        console.log(``)
    }

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno); 
        aluno.turma = this;
    }
}

export class Aluno extends Turma {
    skills: Skill[] = []
    turma!: Turma

    constructor(){}
    
}


// https://thin-board-3ae.notion.site/Criar-diagrama-de-classe-d5e0359e1ae84b988001bd2c9e91ef39
