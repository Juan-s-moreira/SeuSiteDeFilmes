function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()

    if (!campoPesquisa){
      section.innerHTML = "<h2>Por favor, digite um titulo</2>"
      return

    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let genero = "";
  
    // Itera sobre cada filme no array de filmes
    for (let filme of filmes) {
      titulo = filme.titulo.toLowerCase()
      genero = filme.genero.toLowerCase()
      // Se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) ){
        // Cria um novo elemento 
        resultados += `
        <div class="item-resultado">
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h2>
            <a href="${filme.imdb}" target="_blank">${filme.titulo}</a>
          </h2>
          <p class="descricao-meta">${filme.ondeAssistir}</p>
          <p>${filme.sinopse}</p>
          <p>${filme.genero}</p>
          <p>${filme.lancamento}</p>
        </div>
      `;
      }
      
    }
  
    // Itera sobre cada série no array de séries
    for (let serie of series) {
      titulo = serie.titulo.toLowerCase()
      genero = serie.genero.toLowerCase()
      if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa)){

        // Cria uma div para cada série e adiciona as informações relevantes
        resultados += `
        <div class="item-resultado">
        <img src="${serie.imagem}" alt="${serie.titulo}">
        <h2>
        <a href="${serie.imdb}" target="_blank">${serie.titulo}</a>
        </h2>
        <p class="descricao-meta">${serie.ondeAssistir}</p>
        <p>${serie.sinopse}</p>
        <p>${serie.genero}</p>
        <p>${serie.temporadas}</p>
        <p>${serie.lancamento}</p>
        </div>
        `;
      }
    }
      
    // Itera sobre cada anime no array de animes
    for (let anime of animes) {
      titulo = anime.titulo.toLowerCase()
      genero = anime.genero.toLowerCase()
      if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa)){

      // Cria uma div para cada anime e adiciona as informações relevantes
      resultados += `
        <div class="item-resultado">
        <img src="${anime.imagem}" alt="${anime.titulo}">
          <h2>
            <a href="${anime.imdb}" target="_blank">${anime.titulo}</a>
          </h2>
          <p class="descricao-meta">${anime.ondeAssistir}</p>
          <p>${anime.sinopse}</p>
          <p>${anime.genero}</p>
          <p>${anime.temporadas}</p>
          <p>${anime.lancamento}</p>
        </div>
      `;
    }
  }  

  if(!resultados){
    resultados = "<h3>Desculpe, não temos esse titulo na nossa base de dados ainda.</h3>"

  }
    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
  }


