import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let urlEvolve = 'http://pokeapi.co/api/v2/pokemon-species/' + name;
    let urlFrontEnd = 'http://pokeapi.co/api/v2/pokemon/' + name;
    let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + name;


    try {
        const nameData = await axios.get(urlEvolve);
        const dataFrontEnd = await axios.get(urlFrontEnd)
        
        const colorData = await axios.get(colorUrl);
        const data = await axios.get(urlID)

        let urlID = nameData.data.evolution_chain.url;

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }

        if (nameData.data.is_baby) {
            return res.json({"id":dataFrontEnd.data.id, "name": dataFrontEnd.data.name, "sprite": dataFrontEnd.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "evolution": data.data.chain.evolves_to[0].species.name});
        } else {
            return res.json({"id":dataFrontEnd.data.id, "name": dataFrontEnd.data.name, "sprite": dataFrontEnd.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "evolution": data.data.chain.evolves_to[0].evolves_to[0].species.name});
        }
    }
    catch(error) {
        console.log(error);
    }
}