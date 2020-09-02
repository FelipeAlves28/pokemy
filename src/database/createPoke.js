module.exports = async function (db, { pokemonValue }) {
    const insertedPokemon = await db.run(`
    INSERT INTO pokemons (name,photo,type,description) VALUES (
        "${pokemonValue.name}",
        "${pokemonValue.photo}",
        "${pokemonValue.type}",
        "${pokemonValue.description}"
    )
    `);
    await Promise.all(insertedPokemon);
}
