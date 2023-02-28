import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Types() {
    const type = "normal"

    const { data, error, isLoading, isValidating } = useSWR(`/api/types/${type}`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { pokemon } = data


    return (
        <>
            <Link href="/"><img class="pokepoint" src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    <h2>Type: {type}</h2>
                    <ul>{pokemon.map(poke => <li>{poke}</li>)}</ul>
                    var select = document.getElementById("selectNumber"); 
                    var options = ["1", "2", "3", "4", "5"]; 

for(var i = 0; i < options.length; i++) {
    var opt = options[i];

    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;

    select.add(el);
}​
                </>
            )}
        </>
    )
}