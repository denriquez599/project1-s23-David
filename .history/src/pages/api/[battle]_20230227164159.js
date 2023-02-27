import axios from 'axios';

export default async function handler(req, res) {
    let poke1 = req.body.pokemon1;
    let poke2 = req.body.pokemon2;
    let url1 = 'http://pokeapi.co/api/v2/pokemon/' + poke1;
    let url2 = 'http://pokeapi.co/api/v2/pokemon/' + poke2;

    try {
        const data1 = await axios.get(url1);
        stat1 = data1.data.stats[0].base_stat;
        const data2 = await axios.get(url2)
        stat2 = data2.data.stats[1].base_stat;

        if (stat1 > stat2) {
            return res.json({"winner": poke1});
        } else {
            return res.json({"winner": poke2});
        }
        
    }
    catch(error) {
        console.log(error);
    }
}