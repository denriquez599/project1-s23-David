import axios from 'axios';

export default async function handler(req, res) {
    let poke1 = req.body.pokemon1;
    let poke2 = req.body.pokemon2;
    try {
        let url1 = 'https://pokeapi.co/api/v2/pokemon/' + poke1;
        let url2 = 'https://pokeapi.co/api/v2/pokemon/' + poke2;
        const data1 = await axios.get(url1);
        const data2 = await axios.get(url2);
        stat1 = data1.data.stats[0].base_stat;
        stat2 = data2.data.stats[0].base_stat;
    }
    catch(error) {
        console.log(error);
    }
    

    if (stat1 > stat2) {
        return res.json({"winner": poke1});
    } else {
        return res.json({"winner": poke2});
    }
        

    
}