const app = require("./src/app");

const port = 8080;

app.listen(port, () => { 
    console.log(`Menina, o nosso app está de pé na porta ${port}`)
})