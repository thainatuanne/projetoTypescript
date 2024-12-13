console.log("Iniciando o programa...");

import { Item } from '../src/Item/Item';
import { Pedido } from '../src/Item/Pedido';

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


