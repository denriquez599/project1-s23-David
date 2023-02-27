import axios from "axios";
export default async function handler(req, res) {
    let data1, data2;
    let pokeData1, pokeData2;
    try {
        data1 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon1); 
        data2 = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon2);    

    } catch (error) {
        console.log(error);
    }
    pokeData1 = data1.data.stats[0].base_stat;
    pokeData2 = data2.data.stats[0].base_stat;
    if (pokeData1 > pokeData2) {
        return res.send({winner: });
    }
    return res.send({winner: pokemon1});
    
}