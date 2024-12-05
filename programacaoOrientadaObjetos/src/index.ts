// import { Usuario } from "./Usuario";

// // // Criando o primeiro usuário
// const usuario1 = new Usuario();
// usuario1.nome = "Carla";
// usuario1.idade = 36;
// console.log(usuario1);

// // // Criando o segundo usuário
// const usuario2 = new Usuario();
// usuario2.nome = "José";
// usuario2.idade = 45;
// console.log(usuario2);

// // Livro

// import { Livro } from "./Livro";

// // 1 livro
// const livro1 = new Livro();
// livro1.titulo = 'Crepúsculo'
// livro1.autor = 'Stepanhye Mayer'
// livro1.anoPublicacao = 2016
// console.log(livro1)

// // 2 livro

// const livro2 = new Livro();
// livro2.titulo = 'Lua Nova'
// livro2.autor = 'Stepanhye Mayer'
// livro2.anoPublicacao = 2018
// console.log(livro2)

// // Novo Usuario Novo nome

// const usuario3 = new Usuario()
// usuario3.nome = 'Alice';
// usuario3.idade = 25;

// console.log(usuario3.obterNome())

// usuario3.atualizarNome('Juliana')

// console.log(usuario3.obterNome())

// usuario3.saudacao()


// import { Carro } from "./Carro";
// // Testando a classe
// const carro1 = new Carro("Toyota", "Corolla", 2020);
// const carro2 = new Carro("Ford", "Mustang", 2022);

// carro1.exibirInformações(); // Carro: Toyota Corolla, Ano: 2020
// carro2.exibirInformações(); // Carro: Ford Mustang, Ano: 2022

// import { Pessoa } from "./Pessoa";
// // Pessoa

// const pessoa = new Pessoa('Thainá', 28);
// console.log(pessoa)
// pessoa.dizerOla()

// import { Produto } from "./Produto";

// const produto = new Produto("Notebook", 3000);
// produto.mostrarDetalhes();

// const produto2 = new Produto('Notebook', 5000)
// produto2.mostrarPrecoComDesconto()

// const produto3 = new Produto ('Celular', 1500, 10)
// produto3.mostrarPrecoComDesconto()


import { Usuario } from "./Usuario";

const usuario1 = new Usuario("Thainá", 28, "thaina@example.com");
const usuario2 = new Usuario("João", 30);

usuario1.mostrarInfos();
usuario2.mostrarInfos();
