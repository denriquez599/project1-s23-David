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
    let pokemon2data = data2.data.stats[0].base_stat;
    if (pokemon2data > pokemon1data) {
        return res.send({winner: pokemon2});
    }
    return res.send({winner: pokemon1});
    
}