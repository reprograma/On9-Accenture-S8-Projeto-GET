const app = require('./src/app');

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});