import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
    try {
        const data = await axios.get(url);

        return res.json({"evolution"});
    }
    catch(error) {
        console.log(error);
    }
}