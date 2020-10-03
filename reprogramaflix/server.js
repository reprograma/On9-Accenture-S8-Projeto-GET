const app = require ("./src/app")

const port = 8080

app.listen(port, function (){
    console.log ("Menina, o nosso app ta de pe! Na porta " + port)
})