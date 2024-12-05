export class Livro {
    titulo!: string;
    autor!: string;
    anoPublicacao!: number;

    mostrarDetalhes(): void {
        console.log(`O livro ${this.titulo} escrito pelo Autor ${this.autor} foi publicano em ${this.anoPublicacao}`)
    }
}




// Vamos criar um exercício para praticar a criação de classes sem o uso de construtores. Neste caso, vamos modelar uma classe Livro que representará informações básicas sobre um livro.

// Crie uma classe chamada Livro com as seguintes propriedades:
// titulo (string): Título do livro.
// autor (string): Nome do autor do livro.
// anoPublicacao (number): Ano de publicação do livro.
// Adicione um método chamado mostrarDetalhes à classe. Este método deve imprimir no console uma mensagem formatada com os detalhes do livro, como "O livro 'Título' escrito por Autor foi publicado em Ano."
// Crie duas instâncias da classe Livro e atribua valores diferentes às suas propriedades.
// Chame o método mostrarDetalhes para cada instância, verificando se as informações são exibidas corretamente.