import { Ingresso, Normal, VIP, Camarote } from './Ingresso';

function criarIngressos(): Ingresso[] {
    return [
        new Normal(32),
        new VIP(32, 10),
        new Camarote(32, 35),
    ];
}

const ingressos = criarIngressos();
ingressos.forEach((ingresso) => ingresso.imprimeValor());

//

import { Imovel, Novo, Velho } from './Imovel';

function criarImovel(): Imovel[] {
    return [
        new Novo("Rua das Flores, 54", 600000, 10000),
        new Velho("Rua Aimoré, 510", 900000, 200000),
    ];
}

const imoveis = criarImovel();
imoveis.forEach((imovel) => imovel.imprimirResultado());

//

import {Animal, Cavalo, Cachorro, Gato} from "./Animal";

const cavalo = new Cavalo("Spirit", "hinn in", "galopando", "campo");
const cachorro = new Cachorro("Rex", "au au", "brincando", "caramelo");
const gato = new Gato("Miau", "miau", "comendo", 3);

const animais: Animal[] = [cavalo, cachorro, gato];
Animal.executarAcoes(animais);