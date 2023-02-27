import axios from 'axios';

export default async function handler(req, res) {
    let name = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name + 'stats]';
    try {
        const data = await axios.get(url);
        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        return res.json({"name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr});
    }
    catch(error) {
        console.log(error);
    }
}