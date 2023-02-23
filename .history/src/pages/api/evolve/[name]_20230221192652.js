import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
    try {
        const data = await axios.get(url);

        data.

        return res.json({"evolution": data.data.pokemon.evolution});
    }
    catch(error) {
        console.log(error);
    }
}