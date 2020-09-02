const database = require('sqlite-async');

function execute(db){
    return db.exec(`
    CREATE TABLE IF NOT EXISTS pokemons (
        poke_id INTEGER AUTO_INCREMENT,
        name TEXT,
        photo TEXT,
        type TEXT,
        description TEXT
    );
    `);
}

module.exports = database.open(__dirname + '/database.sqlite').then(execute);