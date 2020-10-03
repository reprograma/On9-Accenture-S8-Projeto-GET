const app = require ("./src/app")

const PORT = 5000

app.listen(PORT, function(){
    console.log("Menina, o nosso app rodou na porta " + PORT)
})