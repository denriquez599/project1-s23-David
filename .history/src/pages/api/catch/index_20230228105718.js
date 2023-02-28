// import axios from "axios";

// function randNum(minimum, maximum) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// export default async function handler(req, res) {
//     let data;
//     let name = req.query.pokemon;
//     try {
//         let caughtOrNot;
//         data = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name); 
//         let HPMax = data.data.stats[0].base_stat;
//         console.log(HPMax);
//         let N = randNum(1, 255);
//         let BALL = randNum(1, 255);
//         let HPCurrent = randNum(1, HPMax);
//         let f = (HPMax * 255 * 4) / (HPCurrent * BALL);
//         if (f >= N) {
//             caughtOrNot = true;
//         } else {
//             caughtOrNot = false;
//         }
//         return res.json({caught: caughtOrNot});
//     } catch (e) {
//         console.log(e);
//     }
    
// }

import axios from "axios";

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default async function handler(req, res) {
    let response;
    let pokemon = req.body.pokemon;
    try {
        response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);  
    } catch (e) {
        console.log(e);
    }
    let HPMax = response.data.stats[0].base_stat;
    console.log(HPMax);
    let N = getRandom(1, 255);
    let BALL = getRandom(1, 255);
    let HPCurrent = getRandom(1, HPMax);
    let f = (HPMax * 255 * 4) / (HPCurrent * BALL);
    let ifCaught = (f >= N);
    return res.send({caught: ifCaught});
    
}