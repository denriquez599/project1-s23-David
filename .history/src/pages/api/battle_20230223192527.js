import axios from 'axios';

export default async function handler(req, res) {
    let poke1 = req.query.pokemon1;
    let poke2 = req.query.pokemon2;
    let url1 = 'http://pokeapi.co/api/v2/pokemon/' + name;
    
    try {
        const data1 = await axios.get(url1);
        stat1 = data1.data.stats[0].base_stat;
        const data1 = await axios.get(url2)
        stat2 = data2.data.stats[0].base_stat;
        
        return res.json({"name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr});
    }
    catch(error) {
        console.log(error);
    }
}