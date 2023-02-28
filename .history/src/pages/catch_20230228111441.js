import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = async (url) => {
    const res = await axios.post(url, {
        pokemon: "pikachu"
    })
    return res.data
}

export default function Battle() {
    const name = "pikachu"
    const { data, error, isLoading, isValidating } = useSWR(`/api/catch/`, fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><h1>Better PokeAPI</h1></Link>
            <h2>Must Implement your API. Data is empty</h2>
        </>
    )
    let { id, sprite, types, bgColor, caught } = data

    return (
        <>
            <Link href="/"><img class="pokepoint" src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    <div class="cardContainer shaker">
                        <div class="pokeCard">
                            <img class="pokePicture foreground" src={sprite} />
                            <div class="fatCircle"  />
                            <h2 style={{position: 'absolute', bottom: '235px', fontSize: '20px'}}>#{id}</h2>
                            <h2 class="foreground" style={{textTransform: 'capitalize', fontFamily:'Gill Sans', fontSize:'50px', fontWeight:'normal', position: 'absolute', bottom: '150px', letterSpacing: '4px'}}>{name}</h2>
                            <h2 class="foreground" style={{textTransform: 'capitalize', fontFamily:'Gill Sans', fontSize: '15px', fontWeight:'lighter', position: 'absolute', bottom: '150px'}}>Type: {types.map(type => <span>{type} </span>)}</h2>
                            <div class="circle" style={{backgroundColor: `${bgColor}` }} />
                            <div class="background" style={{backgroundColor: `${bgColor}` }}/>
                        </div>
                    </div>
                    {caught ? (
                        <h2>{name} has been caught!</h2>
                    ) : (
                        <h2>{name} broke free!</h2>
                    )}
                </>
            )}
        </>
    )
}