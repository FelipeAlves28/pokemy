const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const {pageMain,pageCollectionPokemon,pageRegisterPokemon, savePokemon} = require('./database/pages');

nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

try {
    server
        .use(express.urlencoded({ extended: true }))
        .use(express.static("public"))
        .get("/", pageMain)
        .get("/collections", pageCollectionPokemon)
        .get("/register", pageRegisterPokemon)
        .post("save-poke", savePokemon)
        .listen(3000)
    console.log("Server running port 3000");
} catch (error) {
    console.log(error);
}