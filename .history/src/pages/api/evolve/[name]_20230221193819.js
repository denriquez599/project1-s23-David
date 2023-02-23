import axios from 'axios';

export default async function handler(req, res) {

    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
    try {
        const nameData = await axios.get(url);
        let urlID = 'http://pokeapi.co/api/v2/pokemon/' +

        return res.json({"evolution": data.data.chain.evolves_to[0].name});
    }
    catch(error) {
        console.log(error);
    }
}