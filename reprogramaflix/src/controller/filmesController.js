// estamos trabalhando a logica que os metodos estao fazendo 
const filmes = require("../models/filmes.json")


// Criando uma função que pega tudo no jsom, essa função esta recebendo dois parametros, request e response.
// qualo link Url que o usurario esta puchando
// responder o que o usario esta usando 200 se deu certo e a resposta do filme
const getAll = (request, response) => {
     console.log(request.url)
     response.status(200).send(filmes)

    }

    const getById = (request, response) => {
        const id = request.params.id
        response.status(200).send(filmes.find(filme => filme.id  == id ))
    } // find procura dentro das listas o que a gente quer e ira mostar o primeiro
    // midule para exportar função no caso é a getAll
   
   
  const getByTitle = (request, response) =>{
      const titulo = request.query.titulo
      response.status(200).send(filmes.find(filme => filme.Title == titulo))
  }

// temos que criar uma Array para o genero por ele esta como string grande
  const getByGenre = (request, response) =>{
      const genero = request.query.genero
      let novalista = []



      filmes.forEach(filme => {
   let generoList = filme.Genre.split(" , ")
  // console.log(generoList)
   for(item off generoList){
       //console.log(item)
       if (item.inclusdes(genero) && filme.Genre.includes(item)){
           console.log(filme)
           novalista.push(filme)
       }

   }
})

response.status(200).send(novalista)
  }
    module.exports = {
        getAll,
        getById,
        getByTitle,
        getByGenre
    } 