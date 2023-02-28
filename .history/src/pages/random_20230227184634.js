import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Random() {
    const { data, error, isLoading, isValidating } = useSWR("/api/", fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { name, sprite, types, bgColor } = data


    return (
        <>
            <Link href="/"><img class="pokepoint" src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                <div class="cardContainer">
                    <div class="pokeCard">
                        <div
                        <img class="pokePicture" src={sprite} />
                        <h2>Name: {name} </h2>
                        <h2>Types: {types.map(type => <span>{type} </span>)}</h2>
                        <div class="background" style={{backgroundColor: `${bgColor}` }}/>
                    </div>
                    
                </div>

                    
                </>
            )}
        </>
    )
}