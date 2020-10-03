const app = require("./src/app")
//chama as rotas no app
const PORT = 8080
//chama a porta

app.listen(PORT, function(){
    console.log("Menina, o nosso app ta de pe! Na porta " + PORT)
})