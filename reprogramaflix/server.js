const app = require("./src/app");
const PORT = 8080;

app.listen(PORT, function(){
    console.log("O app tá de pé na porta " + PORT)
})