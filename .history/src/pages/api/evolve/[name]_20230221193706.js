import axios from 'axios';

export default async function handler(req, res) {
let urlID = 

    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
    try {
        const data = await axios.get(url);


        return res.json({"evolution": data.data.chain.evolves_to[0].name});
    }
    catch(error) {
        console.log(error);
    }
}