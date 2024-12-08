type Produto = {
    id: number
    nome: string
    preco: number
}

let produtos: Produto[] = []

function cadastrarProduto(nome: string, preco: number) {
    if (!nome || preco <= 0) {
        console.error("Nome ou preço inválido. Tente novamente.")
        return
    }

    const novoProduto: Produto = {
        id: produtos.length + 1,
        nome,
        preco,
    }

    produtos.push(novoProduto)
    console.log(`Produto '${nome}' cadastrado com sucesso!`)
}

function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.")
        return
    }

    console.log("\nLista de Produtos:")
    produtos.forEach((produto) => {
        console.log(`ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`)
    });
}

function excluirProduto(id: number) {
    const index = produtos.findIndex((produto) => produto.id === id)

    if (index === -1) {
        console.error("Produto não encontrado.")
        return;
    }

    const produtoExcluido = produtos.splice(index, 1)[0]
    console.log(`Produto '${produtoExcluido.nome}' excluído com sucesso!`)
}

cadastrarProduto("Notebook", 3500)
cadastrarProduto("Mouse", 150);
cadastrarProduto("Teclado", 250)

listarProdutos()

excluirProduto(2)

listarProdutos()

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.