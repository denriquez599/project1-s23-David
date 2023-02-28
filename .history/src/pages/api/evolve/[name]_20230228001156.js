import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    
    try {        

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

        lete

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        return res.json({"id":data.data.id, "pokeName": evolution, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name});
    }
    catch(error) {
        console.log(error);
    }
}