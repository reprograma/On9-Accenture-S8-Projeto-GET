//escolher a porta e subir
const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function(){
    console.log("Menina, o nosso app tá de pé na porta " + PORT)
})
