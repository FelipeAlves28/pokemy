const { getType } = require('../../public/scripts/feature-pokemon');
const database = require('./db');

function pageMain(req, res) {
    return res.render("index.html");
}
async function pageCollectionPokemon(req, res) {
    const query = `SELECT pokemons.* FROM pokemons`;

    try {
        const db = await database;
        const pokemons = await db.all(query);
        return res.render("collection-poke.html", { pokemons });

    } catch (error) {
        console.log(error);
    }

}
function pageRegisterPokemon(req, res) {
    return res.render("register-poke.html");
}
async function savePokemon(req, res) {
    const createPoke = require('./createPoke');

    const pokemonValue = {
        name: req.body.name,
        photo: req.body.photo,
        type: req.body.type,
        description: req.body.description
    }
    try {
        const db = await database;
        await createPoke(db, { pokemonValue });

        return res.redirect('/collections');
    } catch (error) {
        console.log(error);
    }
}
module.exports = { pageMain, pageRegisterPokemon, pageCollectionPokemon, savePokemon }