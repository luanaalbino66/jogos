function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById 
    ("resultados-pesquisa");

    let campoPesquisa = document. getElementById
     ("campo-pesquisa") .value

    //  se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section. innerHTML = "<p> Nenhuma pesquisa encontrada. Você precisa digitar o nome de um jogo</p>"
        
      return
    }

    campoPesquisa = campoPesquisa. toLowerCase()

     console.log (campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao. 
    includes(campoPesquisa) || tags.includes
    (campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2> <a href="#"
                ">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao}</p>
            <a href= ${dado.link} target="_blank"> Mais informações.</a>
        </div>
    `;
    }       
      }
      if (!resultados){
resultados = "<p>Nenhuma pesquisa encontrada</p>"
      }

    // Atribui o HTML gerado para a seção de resultados.
    section.innerHTML = resultados;
}




