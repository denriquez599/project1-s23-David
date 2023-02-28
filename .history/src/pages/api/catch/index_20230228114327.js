import axios from "axios";

function randNum(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export default async function handler(req, res) {
    let pokemon = req.body.pokemon;
    let caughtOrNot;
    try {
        let N = randNum(1, 255);
        let BALL = randNum(1, 255);
        let currentHP = randNum(1, maxHP);
        let f = (maxHP * 255 * 4) / (currentHP * BALL);
        if (f >= N) {
            caughtOrNot = true;
        } else {
            caughtOrNot = false;
        }

        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + data.data.name;
        const colorData = await axios.get(colorUrl);

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        return res.json({"id":data.data.id, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "caught": caughtOrNot});
    } catch (error) {
        console.log(error);
    }
    
    
}