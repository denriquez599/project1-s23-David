import axios from 'axios';

export default async function handler(req, res) {
    let type = req.query.type;
    let url = 'http://pokeapi.co/api/v2/pokemon/' + type;
    try {
        const data = await axios.get(url);
        let arr = new Array();
        let i = 0;
        while(data.data.pokemon[i] != null) {
            arr.push(data.data.pokemon[i].name);
            i++;
        }
        return res.json({"pokemon": arr});
    }
    catch(error) {
        console.log(error);
    }
}