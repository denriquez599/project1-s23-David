import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon-species/' + name;
    try {
        const nameData = await axios.get(url);
        let urlID = nameData.data.evolution_chain.url;

        const data = await axios.get(urlID)

        if (nameData.data.is_baby) {
            let evolution = data.data.chain.evolves_to[0].species.name;
        } else {
            let evolution = data.data.chain.evolves_to[0].evolves_to[0].species.name;
        }

        let newUrl = 'http://pokeapi.co/api/v2/pokemon/' + evolution;
        
        const newData = await axios.get(newUrl);

        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + newData.data.name;
        const colorData = await axios.get(colorUrl);

        let arr = new Array();
        let i = 0;
        while(newData.data.types[i] != null) {
            arr.push(newData.data.types[i].type.name);
            i++;
        }
        return res.json({"id":newData.data.id, "name": newData.data.name, "sprite": newData.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name});
    }
    catch(error) {
        console.log(error);
    }
}