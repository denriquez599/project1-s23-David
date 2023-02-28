import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon-species/' + name;
    try {
        const nameData = await axios.get(url);
        let urlID = nameData.data.evolution_chain.url;

        const data = await axios.get(urlID)

        if (nameData.data.is_baby) {
            return res.json({"evolution": data.data.chain.evolves_to[0].species.name});
        } else {
            return res.json({'id': data.data.id, "evolution": data.data.chain.evolves_to[0].evolves_to[0].species.name, "sprite": , "types":, "bg"});
        }
    } id, sprite, types, bgColor, evolution
    catch(error) {
        console.log(error);
    }
}