let btnOrdenarPorPreco = document.querySelector("#btnOrdenarPorPreco");
 
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);
function ordenarLivrosPorPreco() {
   let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); // Ordena os livros por preço do menor para o maior
   exibirLivrosNaTela(livrosOrdenados);

}