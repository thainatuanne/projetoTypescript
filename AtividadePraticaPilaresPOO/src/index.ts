import { Ingresso, Normal, VIP, Camarote } from './Ingresso';

const ingressos: Ingresso[] = [
    new Normal(32),
    new VIP(32, 10),
    new Camarote(32, 35)
];

ingressos.forEach((ingresso) => ingresso.imprimeValor());


import {Imovel, Novo, Velho} from "./Imovel";

const imoveis: Imovel[] = [
    new Novo("Rua das Flores, 54", 600000, 10000),
    new Velho("Rua Aimoré, 510", 900000, 200000),
];

imoveis.forEach((imovel) => imovel.imprimirResultado());