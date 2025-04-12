const elementoParaInserirLivros = document.getElementById('livros')
//Aqui estamos pegando o elemento HTML onde vamos inserir os livros
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '' // Limpando o HTML antes de inserir os livros
  listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
       ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
        
    })
}
