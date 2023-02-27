import axios from "axios";

export default async function handler(req, res) {
    let data1, data2;
    try {
        data1 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon1); 
        data2 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon2);    

    } catch (error) {
        console.log(error);
    }
    let pokeData1 = data1.data.stats[0].base_stat;
    let pokeData2 = data2.data.stats[0].base_stat;
    if (pokeData1 > pokeData2) {
        return res.json({winner: req.body.pokemon1});
    } else {
        return res.send({winner: req.body.pokemon2});
    }
    
}