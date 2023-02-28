import axios from "axios";

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export default async function handler(req, res) {
    let response;
    let pokemon = req.body.pokemon;
    try {
        response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);  
        let HPMax = response.data.stats[0].base_stat;
        console.log(HPMax);
        let N = randNum(1, 255);
        let BALL = randNum(1, 255);
        let currentHP = randNum(1, HPMax);
        let f = (HPMax * 255 * 4) / (currentHP * BALL);
        let ifCaught = (f >= N);
        return res.send({caught: ifCaught});
    } catch (e) {
        console.log(e);
    }
    
    
}