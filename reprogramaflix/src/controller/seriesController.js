const { request } = require("../app")
const series = require("../models/series.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(series)

}

const getById = (request, response) =>{
    //colocar no Postman: Key = id, Value = o número do id que quer pesquisar
    const id = request.query.id
    response.status(200).send(series.find(serie => serie.id == id))
}

const getBySeasons = (request, response)=>{
    const temporadas = request.query.temporadas
    response.status(200).send(series.find(uma => uma.totalSeasons == temporadas))
}

const getByGen = (request,response)=>{
    const genero = request.query.genero
    let newList = []

    series.forEach(serie=>{
        let listGenre = serie.genre
        for(uma of listGenre){
            if(uma.includes(genero) && serie.genre.includes(uma)){
                newList.push(serie)
            }

            }
        
        })
            response.status(200).send(newList)
    }

    const getByAct = (request,response) =>{
        const atores = request.query.atores
        const novaLista = []

        series.forEach(serie=>{
            let listaAtores = serie.actors
            for(um of listaAtores){
                if(um.includes(atores) && serie.actors.includes(um)){
                    novaLista.push(serie)
                }
    
                }
            
            })
                response.status(200).send(novaLista)

    }

module.exports = {
    getAll,
    getById,
    getBySeasons,
    getByGen,
    getByAct
}