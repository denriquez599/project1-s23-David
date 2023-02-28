import axios from "axios";

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export default async function handler(req, res) {
    let response;
    let pokemon = req.body.pokemon;
    let caughtOrNot;
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
            caughtOrNot = true
        } else {
            caughtOrNot = false;
        }

        const data = await axios.get(url);

        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + data.data.name;
        const colorData = await axios.get(colorUrl);

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        return res.json({"id":data.data.id, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "caught": caughtOrNot});
    } catch (e) {
        console.log(e);
    }
    
    
}