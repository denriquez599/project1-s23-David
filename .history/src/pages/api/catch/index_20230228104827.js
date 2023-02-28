import axios from "axios";

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default async function handler(req, res) {
    let data;
    let name = req.query.pokemon;
    try {
        let caughOrNot;
        response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name); 
        let HPMax = response.data.stats[0].base_stat;
        console.log(HPMax);
        let N = getRandom(1, 255);
        let BALL = getRandom(1, 255);
        let HPCurrent = getRandom(1, HPMax);
        let f = (HPMax * 255 * 4) / (HPCurrent * BALL);
        if (f >= N) {
            caughtOrNot = true;
        } else {
            caughtOrNot = false;
        }
        return res.json({caught: caught});
    } catch (e) {
        console.log(e);
    }
}