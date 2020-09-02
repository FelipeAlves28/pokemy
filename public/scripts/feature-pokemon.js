const axios = require('axios').default;
const { JSDOM } = require('jsdom')

async function getType() {
    
    // const ufTypes = document.querySelector('select[name=type]')
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type/');
        const types = response.data.results;

        for (const type of types) {
            i = 0;
            // const ufTypes =  new JSDOM('html').window.document.querySelector('select[name=type]')
            // .innerHTML
            i++

        }

    } catch (error) {
        console.log(error);
    }
}

getType().catch((e) => {
    console.log(e);
})
