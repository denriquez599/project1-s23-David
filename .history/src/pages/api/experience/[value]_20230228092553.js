import axios from "axios";
 
export default async function handler(req, res) {
    let response;

    try {
        response = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + req.query.name);     
        response = await axios.get(response.data.growth_rate.url);
        let level = req.query.level;
        let xp = response.data.levels[level - 1].experience;

        let url = 'http://pokeapi.co/api/v2/pokemon/' + name;
        const data = await axios.get(url);

        let colorUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + data.data.name;
        const colorData = await axios.get(colorUrl);

        let arr = new Array();
        let i = 0;
        while(data.data.types[i] != null) {
            arr.push(data.data.types[i].type.name);
            i++;
        }
        return res.json({"id":data.data.id, "name": data.data.name, "sprite": data.data.sprites.front_default, "types": arr, "bgColor": colorData.data.color.name, "experience": "xp"});
    } catch (error) {
        console.log(error);
    }

}