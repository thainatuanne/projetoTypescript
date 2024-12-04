import { Pessoa, Documento, EnderecoTelefone } from "./types/types";

// Pessoa 1

const pessoa1: Pessoa = {
    nome: 'Jabel Martins',
    idade: 30,
    email: 'jabel@gmail.com'
}

// Pessoa 2

const pessoa2: Pessoa = {
    nome: 'Thainá Silva',
    idade: 28,
    telefones: ['999802061', '35631868']
}

// documento 1

const documento1: Documento = 'CPF04229654057'

// documento 2

const documento2: Documento = 8120857076

// Endereço e Telefone

const enderecoTelefone: EnderecoTelefone = {
    rua: 'Rua Alameda',
    cidade: 'Estância Velha',
    telefones: ['999802061']
}

console.log('Pessoa 1:', pessoa1)
console.log('Pessoa 2:', pessoa2)
console.log('Documento 1:', documento1)
console.log('Documento 2:', documento2)
console.log('Endereço e Telefone:', enderecoTelefone)