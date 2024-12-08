import { Pessoa } from "./types/pessoa"
import { exibirInformacoesUsuario } from "./exercicio5";
import { exibirInformacoesDiretor } from "./exercicio6";

function exibirInformacoes(lista: Pessoa[]){
    lista.forEach((pessoa) => {
        if ("ocupacao" in pessoa) {
            exibirInformacoesUsuario(pessoa);
        } else if ("nivelComissionamento" in pessoa) {
            exibirInformacoesDiretor(pessoa);
        }
    });
}

const pessoas: Pessoa[] = [
    { nome: "Jabel", idade: 30, ocupacao: "Analista de TI", salario: 5000 },
    { nome: "Gilmar", idade: 55, ocupacao: "Mecânico" },
    { nome: "Thainá", idade: 28, salario: 7000, nivelComissionamento: 5 },
    { nome: "Madalena", idade: 62, nivelComissionamento: 3 },
];

exibirInformacoes(pessoas);


// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.