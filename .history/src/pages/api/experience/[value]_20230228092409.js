import axios from "axios";
 
export default async function handler(req, res) {
    let data;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + name;

    try {
        data = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + req.query.name);     
        data = await axios.get(data.data.growth_rate.url);
        let level = req.query.level;
        let xp = data.data.levels[level - 1].experience;

        let url = 'http://pokeapi.co/api/v2/pokemon/' + name;


        return res.json({experience: xp});
    } catch (error) {
        console.log(error);
    }

}