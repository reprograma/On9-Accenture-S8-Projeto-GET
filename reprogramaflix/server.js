const app = require("./src/app");

const PORT = 5050; //pode ser 8080 tbm

app.listen(PORT, function(){
    console.log("O nosso app está de pé! Na porta " + PORT);
})