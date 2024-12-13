console.log("Iniciando o programa...");

import { Item } from './Item/Item';
import { Pedido } from './Item/Pedido';

const item1 = new Item(100.0, 'Cadeira', 'Cadeira ergonômica');
const item2 = new Item(50.0, 'Teclado', 'Teclado mecânico RGB');
const item3 = new Item(30.0, 'Mouse', 'Mouse sem fio');

const pedido = new Pedido();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
pedido.adicionarItem(item3);

pedido.removerItem(1);

pedido.imprimirPedido();

//

import { Circulo } from './Elemento/Circulo';
import { Retangulo } from './Elemento/Retanculo';

const meuCirculo = new Circulo(5);
meuCirculo.desenhar();
meuCirculo.redimensionar(10);

const meuRetangulo = new Retangulo(4, 2);
meuRetangulo.desenhar();
meuRetangulo.redimensionar(2);


//

import { Cavalo } from './Animal/Cavalo';
import { Cachorro } from './Animal/Cachorro';
import { Gato } from './Animal/Gato';
import { AnimaisUtils } from './Animal/AnimaisUtils';

const cavalo = new Cavalo('Cavalo', 'Relincho', 'correndo', 'campo');
const cachorro = new Cachorro('Cachorro', 'Latido', 'brincando', 'marrom');
const gato = new Gato('Gato', 'Miau', 'dormindo', 3);

AnimaisUtils.executarAcoes([cavalo, cachorro, gato]);

//

import { Cliente } from './OficinaRefrigeracao/Cliente'; 
import { Aparelho } from './OficinaRefrigeracao/Aparelho'; 
import { Oficina } from './OficinaRefrigeracao/Oficina'; 
import { ICliente } from './OficinaRefrigeracao/ICliente'; 
import { IAparelho } from './OficinaRefrigeracao/IAparelho'; 

const cliente1: ICliente = new Cliente(1, 'João Silva', '99999-9999', 'joao@gmail.com');
const cliente2: ICliente = new Cliente(2, 'Maria Santos', '98888-8888', 'maria@gmail.com');

const aparelho1: IAparelho = new Aparelho(1, 'Lavadora', 'LG', 'TurboWash', 'Recebido');
const aparelho2: IAparelho = new Aparelho(2, 'Micro-ondas', 'Samsung', 'SmartOven', 'Recebido');

const oficina = new Oficina();

oficina.registrarOrdem(
    cliente1,
    aparelho1,
    'Trocar a bomba de água da lavadora',
    250.0,
    new Date('2024-12-20')
);

oficina.registrarOrdem(
    cliente2,
    aparelho2,
    'Reparar a placa principal do micro-ondas',
    180.0,
    new Date('2024-12-22')
);

oficina.listarOrdens();

aparelho1.atualizarStatus('Em manutenção');
aparelho2.atualizarStatus('Pronto para entrega');

cliente1.imprimirDados();
cliente2.imprimirDados();

oficina.listarOrdens().forEach((ordem) => ordem.imprimirResumo());
