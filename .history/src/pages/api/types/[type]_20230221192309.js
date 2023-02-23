import axios from 'axios';

export default async function handler(req, res) {
    let type = req.query.type;
    let url = 'http://pokeapi.co/api/v2/types/' + type;
    try {
        const data = await axios.get(url);
        let arr = new Array();

        for(let pokemon of data.pokemon.p)
    
        return res.json({"pokemon": arr});
    }
    catch(error) {
        console.log(error);
    }
}