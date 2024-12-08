import { Diretor } from "./types/diretor"

export function exibirInformacoesDiretor(diretor: Diretor) {
    const salario = diretor.salario !== undefined ? `R$ ${diretor.salario.toFixed(2)}` : "N/A"
    console.log(
        `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, salário ${salario}`
    )
}

const diretor1: Diretor = { nome: "Thainá", idade: 28, salario: 2000, nivelComissionamento: 2 }
const diretor2: Diretor = { nome: "Jabel", idade: 30, nivelComissionamento: 5 }

exibirInformacoesDiretor(diretor1)
exibirInformacoesDiretor(diretor2)



// Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”