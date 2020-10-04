const app = require("./src/app");

const PORT = 8000;

app.listen(PORT, function(){
    console.log("Menina, o nosso app ta de pe na porta!" + PORT)
})