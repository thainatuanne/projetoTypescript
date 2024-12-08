import { User } from "./types/user"

export function exibirInformacoesUsuario(usuario: User) {
    const salario = usuario.salario !== undefined ? `R$ ${usuario.salario.toFixed(2)}` : "N/A"
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salario}`)
}

const usuario1: User = { nome: "Thainá", idade: 28, ocupacao: "Professora", salario: 2000 }
const usuario2: User = { nome: "Jabel", idade: 30, ocupacao: "Tech Lead" }

exibirInformacoesUsuario(usuario1)
exibirInformacoesUsuario(usuario2)


// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”