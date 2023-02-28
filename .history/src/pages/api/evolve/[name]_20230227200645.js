import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let urlEvolve = 'http://pokeapi.co/api/v2/pokemon-species/' + name;
    let urlFrontEnd = 'http://pokeapi.co/api/v2/pokemon/' + name;

    try {
        const nameData = await axios.get(url);
        let urlID = nameData.data.evolution_chain.url;

        const data = await axios.get(urlID)

        if (nameData.data.is_baby) {
            return res.json({"evolution": data.data.chain.evolves_to[0].species.name});
        } else {
            return res.json({'id': data.data.id, "sprite": , "types": , "bgColor": , "evolution": data.data.chain.evolves_to[0].evolves_to[0].species.name});
        }
    }
    catch(error) {
        console.log(error);
    }
}