//escolher a porta
const { prependListener } = require("./src/app")
const app = require("./src/app")

const PORT = 5000

app.listen(PORT, function(){
    console.log("Menina, o nosso app ta de pé na porta " + PORT)
})
