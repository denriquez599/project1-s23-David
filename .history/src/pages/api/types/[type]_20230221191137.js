import axios from 'axios';

export default async function handler(req, res) {
    let type = req.query.type;
    let url = 'http://pokeapi.co/api/v2/types/' + type;
    try {
        const data = await axios.get(url);
        let arr = new Array();

        data.data.pokemon.forEach(arrBuild);

        function arrBuild(item) {
            arr.push(item.name)
        }
    
        return res.json({"pokemon": arr});
    }
    catch(error) {
        console.log(error);
    }
}