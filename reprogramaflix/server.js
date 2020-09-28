const app = require("./src/app");


const port = 5050;

app.listen(port, function () {
  console.log("Servidor rodando na porta " + port);
});
