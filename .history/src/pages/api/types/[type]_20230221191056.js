import axios from 'axios';

export default async function handler(req, res) {
    let type = req.query.type;
    let url = 'http://pokeapi.co/api/v2/types/' + type;
    try {
        const data = await axios.get(url);
        let arr = new Array();
        let i = 0;

        data.data.pokemon

        function arrBuild(item) {
            arr.push(item.name)
        }
        while(data.data.pokemon[i].pokemon.name != null) {
            arr.push(data.data.pokemon[i].pokemon.name);
            i++;
        }
        return res.json({"pokemon": arr});
    }
    catch(error) {
        console.log(error);
    }
}