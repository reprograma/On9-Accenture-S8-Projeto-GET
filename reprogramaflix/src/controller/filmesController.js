const response  = require("express")
const filmes = require ("../models/filmes.json") //.. para sair da pasta e entrar na models e requerer o json

const getAll = (req, res) => { //função getAll para ela receber tudo do json
    console.log(req.url) //console para eu pedir o que o usuário está mandando
    res.status(200).send(filmes) //mandar uma resposta com status 200 e enviar como resposta o json
}

const getById = (req, res) => {       
    const id = req.params.id      //usuario digita um parametro (o id) que vai receber o id
    res.status(200).send(filmes.find(filme => filme.id == id))   //vou comparar o filme.id com o id, gerando uma resposta
}

const getByTitle = (req, res) => {
    const titulo = req.query.titulo
    res.status(200).send(filmes.find(filme => filme.Title =- titulo)) //quero que a variavel Title do json seja igual o nosso titulo
}

const getByGenre = (req, res) => {
    const genero = req.query.genero //pego o que o usuário mandou
    let NovaLista = [] //criando um array vazio para usar no for

    //transformando uma string em uma array com split
    filmes.forEach(filme =>{   //primeiro preciso passar por todos os filmes
        let generoList = filme.Genre.split(",") //ele traz o genero em array ao inves de string de todos os filmes
       //para cada unidade de filme, eu pego a chave genero
        for(item of generoList) { //passando itens por dentro da array com o for of; ele vai passar item por item ta lista genero
            if(item.includes(genero) && filme.Genre.includes(item)) { //eu quero que o item tenha o que o usuário digitou && (E) quero que o filme.genro também tenha o item
                console.log(filme)
                NovaLista.push(filme) //colocando na nova lista o nosso filme dando push
            }
        }
    }) 

    response.status(200).send(NovaLista) //enviando a novaLista com o filme adicionado
}

module.exports = {   //ele exporta para ser usado em qualquer outro lugar do nosso arquivo uma função ou um arquivo       
    getAll, //exportando a função getAll
    getById, //exportando a getById
    getByTitle, //exportando a função getByTitle
    getByGenre
}  //com isso a função funciona além do meu arquivo
