let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
 
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);
function ordenarLivrosPorPreco() {
   let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); // Ordena os livros por preço do menor para o maior
   exibirOsLivrosNaTela(livrosOrdenados);

}