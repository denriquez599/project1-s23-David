import axios from "axios";

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export default async function handler(req, res) {
    let response;
    let pokemon = req.body.pokemon;
    try {
        response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);  
        let maxHP = response.data.stats[0].base_stat;
        console.log(maxHP);
        let N = randNum(1, 255);
        let BALL = randNum(1, 255);
        let currentHP = randNum(1, maxHP);
        let f = (maxHP * 255 * 4) / (currentHP * BALL);
        let ifCaught = (f >= N);
        if (f >= N) {
            return res.send
        }
        return res.send({caught: ifCaught});
    } catch (e) {
        console.log(e);
    }
    
    
}