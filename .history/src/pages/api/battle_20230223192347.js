import axios from 'axios';

export default async function handler(req, res) {
    let poke1 = req.query.name;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
    try {
        const data = await axios.get(url);
        let arr = new Array();
        let i = 0;
        
        return res.json({"name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr});
    }
    catch(error) {
        console.log(error);
    }
}