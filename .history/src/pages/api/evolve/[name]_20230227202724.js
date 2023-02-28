import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let urlEvolve = 'http://pokeapi.co/api/v2/pokemon-species/' + name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;

    try {
        const data = await axios.get(url);
        const nameData = await axios.get(urlEvolve);
        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + data.data.name;
        const colorData = await axios.get(colorUrl);
        let urlID = nameData.data.evolution_chain.url;
        const dataURL = await axios.get(urlID)

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        if (nameData.data.is_baby) {
            return res.json({"id":data.data.id, "name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "evolution": dataURL.data.chain.evolves_to[0].species.name});
        } else {
            return res.json({"id":data.data.id, "name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "evolution": data.data.chain.evolves_to[0].evolves_to[0].species.name});
        }
    }
    catch(error) {
        console.log(error);
    }
}