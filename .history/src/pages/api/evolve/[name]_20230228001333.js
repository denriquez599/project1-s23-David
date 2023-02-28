import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    
    try {        
        let evolution;
        let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
        
        const nameData = await axios.get(url);
        let urlID = nameData.data.evolution_chain.url;

        const data = await axios.get(urlID)

        if (nameData.data.is_baby) {
            let evolution = data.data.chain.evolves_to[0].species.name;
        } else {
            let evolution = data.data.chain.evolves_to[0].evolves_to[0].species.name;
        }

        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + evolution;
        const colorData = await axios.get(colorUrl);

        let evoUrl = 'http://pokeapi.co/api/v2/pokemon/' + evolution;

        lastData = await axios.get(evoUrl);

        let arr = new Array();
        let i = 0;
        while(lastData.data.types[i] != null) {
            arr.push(lastData.data.types[i].type.name);
            i++;
        }
        return res.json({"id":lastData.data.id, "pokeName": evolution, "sprite": lastData.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name});
    }
    catch(error) {
        console.log(error);
    }
}