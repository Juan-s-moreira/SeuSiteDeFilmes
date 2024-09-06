let filmes = [
    {
        titulo: "O Poderoso Chefão",
        sinopse: "A saga da família Corleone, um dos clãs mafiosos mais poderosos dos Estados Unidos.",
        genero: "Drama / Crime",
        ondeAssistir: "Paramount+",
        lancamento: 1972,
        imdb: "https://www.imdb.com/title/tt0068646/",
        imagem: "assets/filmes/PoderosoChefao.jpg"
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        sinopse: "Um hobbit se une a um mago e dois elfos em uma jornada para destruir um anel poderoso.",
        genero: "Fantasia / Aventura",
        ondeAssistir: "Amazon Prime Video",
        lancamento: 2001,
        imdb: "https://www.imdb.com/title/tt0120737/",
        imagem: "assets/filmes/SenhorDosAneis.jpg"
    },
    {
        titulo: "Pulp Fiction",
        sinopse: "Várias histórias interligadas se desenrolam em um dia conturbado em Los Angeles.",
        genero: "Crime / Drama",
        ondeAssistir: "Netflix",
        lancamento: 1994,
        imdb: "https://www.imdb.com/title/tt0110912/",
        imagem: "assets/filmes/PulpFiction.jpg"
    },
    {
        titulo: "O Iluminado",
        sinopse: "Um escritor e sua família se mudam para um hotel isolado no inverno, onde eventos sobrenaturais começam a acontecer.",
        genero: "Terror / Suspense",
        ondeAssistir: "HBO Max",
        lancamento: 1980,
        imdb: "https://www.imdb.com/title/tt0081505/",
        imagem: "assets/filmes/OIluminado.jpg"
    },
    {
        titulo: "Parasita",
        sinopse: "Uma família pobre manipula uma família rica, revelando as disparidades sociais da Coreia do Sul.",
        genero: "Drama / Thriller",
        ondeAssistir: "Disney+",
        lancamento: 2019,
        imdb: "https://www.imdb.com/title/tt6751668/",
        imagem: "assets/filmes/Parasita.jpg"
    },
    {
        titulo: "Interestelar",
        sinopse: "Um grupo de astronautas embarca em uma missão para encontrar um novo lar para a humanidade.",
        genero: "Ficção Científica / Aventura",
        ondeAssistir: "HBO Max",
        lancamento: 2014,
        imdb: "https://www.imdb.com/title/tt0816692/",
        imagem: "assets/filmes/Interestelar.jpg"
    }
];

let series = [
    {
        titulo: "Stranger Things",
        sinopse: "Um grupo de amigos descobre uma misteriosa força sobrenatural em sua pequena cidade.",
        genero: "Drama / Fantasia / Terror",
        ondeAssistir: "Netflix",
        lancamento: 2016,
        temporadas: 4,
        imdb: "https://www.imdb.com/title/tt4574334/",
        imagem:"assets/series/StrangerThings.jpg"
    },
    {
        titulo: "Game of Thrones",
        sinopse: "Numa terra inspirada na Idade Média, famílias nobres lutam pelo controle do Trono de Ferro.",
        genero: "Drama / Fantasia",
        ondeAssistir: "HBO Max",
        lancamento: 2011,
        temporadas: 8,
        imdb: "https://www.imdb.com/title/tt0944947/",
        imagem:"assets/series/GameOfThrones.jpg"
    },
    {
        titulo: "The Mandalorian",
        sinopse: "Um caçador de recompensas solitário navega pelos confins da galáxia após a queda do Império.",
        genero: "Ação / Aventura / Ficção Científica",
        ondeAssistir: "Disney+",
        lancamento: 2019,
        temporadas: 3,
        imdb: "https://www.imdb.com/title/tt8111088/",
        imagem:"assets/series/Mandalorian.jpg"
    },
    {
        titulo: "Breaking Bad",
        sinopse: "Um professor de química com câncer diagnosticado começa a produzir metanfetamina para garantir o futuro de sua família.",
        genero: "Drama / Crime",
        ondeAssistir: "Netflix",
        lancamento: 2008,
        temporadas: 5,
        imdb: "https://www.imdb.com/title/tt0903747/",
        imagem:"assets/series/BreakingBad.jpg"
    },
    {
        titulo: "The Crown",
        sinopse: "Uma dramatização da vida da Rainha Elizabeth II e da família real britânica.",
        genero: "Drama / História",
        ondeAssistir: "Netflix",
        lancamento: 2016,
        temporadas: 5,
        imdb: "https://www.imdb.com/title/tt4786824/",
        imagem:"assets/series/TheCrown.jpg"
    }
];

let animes = [
    {
        titulo: "Demon Slayer: Kimetsu no Yaiba",
        sinopse: "Um jovem caçador de demônios busca vingança pela morte de sua família.",
        genero: "Ação / Aventura / Fantasia",
        ondeAssistir: "Crunchyroll",
        lancamento: 2019,
        temporadas: 2,
        imdb: "https://www.imdb.com/title/tt9335498/",
        imagem: "assets/animes/DemonSlayer.jpg"
    },
    {
        titulo: "Attack on Titan",
        sinopse: "A humanidade vive dentro de muros para se proteger de titãs gigantes.",
        genero: "Ação / Drama / Fantasia",
        ondeAssistir: "Crunchyroll",
        lancamento: 2013,
        temporadas: 4,
        imdb: "https://www.imdb.com/title/tt2560140/",
        imagem: "assets/animes/AttackOnTitan.jpg"
    },
    {
        titulo: "Naruto",
        sinopse: "A história de um ninja órfão que sonha em se tornar o Hokage, o líder de sua aldeia.",
        genero: "Ação / Aventura / Fantasia",
        ondeAssistir: "Crunchyroll",
        lancamento: 2002,
        temporadas: "muitas",
        imdb: "https://www.imdb.com/title/tt0409591/",
        imagem: "assets/animes/Naruto.jpg"
    },
    {
        titulo: "One Piece",
        sinopse: "Um jovem pirata sai em busca do tesouro mais procurado do mundo, o One Piece.",
        genero: "Ação / Aventura / Fantasia",
        ondeAssistir: "Crunchyroll",
        lancamento: 1999,
        temporadas: "muitas",
        imdb: "https://www.imdb.com/title/tt0388629/",
        imagem: "assets/animes/OnePiece.jpg"
    },
    {
        titulo: "Fullmetal Alchemist: Brotherhood",
        sinopse: "Dois irmãos alquimistas buscam restaurar seus corpos após um experimento fracassado.",
        genero: "Ação / Aventura / Fantasia",
        ondeAssistir: "Crunchyroll",
        lancamento: 2009,
        temporadas: 1,
        imdb: "https://www.imdb.com/title/tt1355642/",
        imagem: "assets/animes/Fullmetal.jpg"
    }
];
