import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    
    let evoUrl = 'http://pokeapi.co/api/v2/pokemon-species/' + name;

    try {
        const data = await axios.get(evoUrl);

        let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + data.data.name;
        const colorData = await axios.get(colorUrl);

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        return res.json({"id":data.data.id, "name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name});
    }
    catch(error) {
        console.log(error);
    }
}

    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon-species/' + name;
    try {
         
    }
    catch(error) {
        console.log(error);
    }
}