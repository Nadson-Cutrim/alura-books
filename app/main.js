let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()
const elementoLivros = document.getElementById('livros') 

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
   exibirOsLivrosNaTela(livrosComDesconto)

}
