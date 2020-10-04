const app = require ("./src/app");

const PORT = 5050;

app.listen(PORT, function(){
    console.log("Server Running at port " + PORT)
});