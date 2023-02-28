import axios from 'axios';

let randNum = String(Math.floor(Math.random() * 1009));

export default async function handler(req, res) {
    let url = 'http://pokeapi.co/api/v2/pokemon/' + randNum;
    let colorUrl = 'https://pokeapi.co/api/v2/pokemon-color/'
    try {
        const data = await axios.get(url);
        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        
        return res.json({"name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": data.data.color.name });
    }
    catch(error) {
        console.log(error);
    }
}