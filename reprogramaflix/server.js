const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function(){

    console.log("Deu tudo certo, seu servidor esta rodando na porta:  " + PORT)
})