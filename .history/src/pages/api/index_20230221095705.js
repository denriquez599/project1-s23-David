import axios from 'axios';

export default async function handler(req, res) {
    let url = 'http://pokeapi.co/api/v2/pokemon/' + randNum;
    try {
        const data = await axios.get(url);
        let arr = new Array();

    }
}