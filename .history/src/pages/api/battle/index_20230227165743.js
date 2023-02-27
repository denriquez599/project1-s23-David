import axios from "axios";
export default async function handler(req, res) {
    let data1, data2;
    let pokeData1, pokeData2;
    try {
        data1 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon1); 
        pokeData1 = data1.data.stats[0].base_stat;

        data2 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon2);    
        pokeData2 = data2.data.stats[0].base_stat;
    } catch (error) {
        console.log(error);
    }
    if (pokeData1 > pokeData2) {
        return res.send({winner: pokemon2});
    }
    return res.send({winner: pokemon1});
    
}