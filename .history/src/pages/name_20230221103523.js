import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.get(url)
    console.log(res.data)
    return res.data
}

export default function Name() {
    let { data, error, isLoading, isValidating } = useSWR("/api/pokemon/pikachu", fetcher)

    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )

    let { pokemonName, sprite, types } = data


    return (
        <>
            <Link href="/"><img src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    <h2>Name: {pokemonName}</h2>
                    <img src={sprite} />
                    <h2>Types: {types.map(type => <span>{type} </span>)}</h2>
                </>
            )}
        </>
    )
}