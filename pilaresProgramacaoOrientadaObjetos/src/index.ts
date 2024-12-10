// import { Carro } from "./Carro"

// const carro = new Carro('Toyota', 'Corolla', 2024)
// carro.exibirInfos()

// PROGRAMAÇÃO ORIENTADA A OBJETOS 
// Encapsulamento

// encapsulamento

import { Exemplo, ContaBancarias, Pessoa } from './Encapsulamento';

// Exemplo de uso da classe Exemplo
console.log('--- Exemplo de Encapsulamento ---');
const instancia = new Exemplo('Olá', 30);
instancia.mostrarDetalhes();
// console.log(instancia.variavelPrivada); // Comentado para evitar erro

// Exemplo de uso da classe ContaBancaria
console.log('--- Exemplo de Conta Bancária ---');
const conta = new ContaBancarias(1000);
console.log(`Saldo inicial: R$ ${conta.valor}`);
conta.valor = 1500;
console.log(`Saldo atualizado: R$ ${conta.valor}`);
conta.valor = -500; // Tentativa inválida
console.log(`Saldo após tentativa inválida: R$ ${conta.valor}`);

// Exemplo de uso da classe Pessoa
console.log('--- Exemplo de Pessoa ---');
const pessoa = new Pessoa(25);
console.log(`Idade inicial: ${pessoa.idade}`);
pessoa.idade = 30;
console.log(`Nova idade: ${pessoa.idade}`);
pessoa.idade = -5; // Tentativa inválida
console.log(`Idade após tentativa inválida: ${pessoa.idade}`);

// HERANÇA

// HERANÇA CLASSES ABSTRATAS

// colocar abstract na frente da class

// não pode instanciar uma classe abstrata

import {Animal, Cachorro, Galo, Peixe } from './Heranca';

// Exemplo 1: Cachorro
const cachorro = new Cachorro('Rex');
console.log(`Nome: ${cachorro.nome}`);
console.log(`Tipo: ${cachorro.tipo}`);
cachorro.emitirSom();
cachorro.latir();

// Exemplo 2: Galo
const galo = new Galo('Carijó');
console.log(`Nome: ${galo.nome}`);
console.log(`Tipo: ${galo.tipo}`); 
galo.emitirSom();
galo.cocar();

// Exemplo 3: Peixe
const peixe = new Peixe('Nemo', true);
console.log(`Nome: ${peixe.nome}`);
console.log(`Tipo: ${peixe.tipo}`);
peixe.nadar();
console.log(peixe.tipoDeAgua());



// POLIMORFISMO
import { Animais, Vaca, Gato } from './Polimorfismo';

const animal1 = new Vaca('Memel');
const animal2 = new Gato('Mimo');

animal1.produzirSom(); // Memel diz: Muuuu!
animal2.produzirSom(); // Mimo diz: Miau!


// exercicio de fixação aula 09/12/24

// ### **Atividade: Sistema bancário**

// ### Objetivo:

// Desenvolver um sistema bancário simples em TypeScript, utilizando classes, modificadores de acesso, herança, encapsulamento, getters e setters.

import { ContaBancaria, ContaCorrente, ContaPoupanca } from './ContaBancaria';

const contaBancaria = new ContaBancaria("12345", 5000);
console.log(`Número da Conta Bancária: ${contaBancaria.numeroConta}`);
console.log(`Saldo Inicial: R$ ${contaBancaria.saldo}`);


const contaCorrente = new ContaCorrente("12345", 0, 1000);
console.log(`Número da Conta Corrente: ${contaCorrente.numeroConta}`);
contaCorrente.saldo += 500;
console.log(`Saldo Atual da Conta Corrente: R$ ${contaCorrente.saldo}`);
contaCorrente.usarChequeEspecial(300);
console.log(`Saldo Final da Conta Corrente: R$ ${contaCorrente.saldo}`);

const contaPoupanca = new ContaPoupanca("12345", 6500);
console.log(`Número da Conta Poupança: ${contaPoupanca.numeroConta}`);
contaPoupanca.calcularJuros(1);
console.log(`Saldo Final da Conta Poupança: R$ ${contaPoupanca.saldo}`);

