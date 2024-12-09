import { Contador } from "./Contador";

const contador = new Contador(5);
contador.incrementar(); 
console.log(contador.obtemValor());
contador.zerar();
console.log(contador.obtemValor());

//

import { Bola } from "./Bola";

const informacaoBola = new Bola('Prata', 30, 'Plástico');
informacaoBola.trocaCor('vermelha');
console.log(`A cor atual da bola é: ${informacaoBola.mostraCor()}`)

//

import { Conta } from "./Conta";


const minhaConta = new Conta(12345, 'Thaina da Silva');
minhaConta.deposito(1000);
minhaConta.saque(200);
minhaConta.alterarNome('Thainá Martins');
minhaConta.saque(900);

//

import { Calculadora  } from "./Calculadora";

const calc = new Calculadora();

calc.somar(10, 3);
calc.subtrair(10, 4);
calc.multiplicar(2, 6);
calc.dividir(8, 2);
calc.dividir(10, 0);
calc.visualizarHistorico();

//

import { BombaCombustivel } from "./BombaCombustivel";

const bomba = new BombaCombustivel("Gasolina", 6.19, 150);

bomba.abastecerPorValor(100);
bomba.abastecerPorLitro(6.19);
bomba.alterarValor(6.40);
bomba.alterarCombustivel("Gasolina Adtivada");
bomba.alterarQuantidadeCombustivel(50);
bomba.abastecerPorLitro(180);

//

import { Carro } from "./Carro";

const bomba2 = new BombaCombustivel("Gasolina", 6.50, 100);
const meuFiesta = new Carro(15);

meuFiesta.adicionarGasolina(bomba2, 20);
meuFiesta.andar(100);
meuFiesta.obterGasolina();