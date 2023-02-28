import axios from "axios";
 
export default async function handler(req, res) {
    let response;
    try {
        response = await axios.get("https://pokeapi.co/api/v2/pokemon-species/" + req.query.name);     
        response = await axios.get(response.data.growth_rate.url);
        let level = req.query.level;
        let xp = response.data.levels[level - 1].experience;
        return res.json({experience: xp});
    } catch (error) {
        console.log(error);
    }

}