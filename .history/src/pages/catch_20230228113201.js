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
    const inputRef = useRef(null)
    const [name, setName] = useState('');
    function setUrl(){
        let url = "/api/pokemcatchon/" + name;
        console.log(url)
        return url;
    }
    const handleChange = () => {
        setName(inputRef.current.value);
      };
    let { data, error, isLoading, isValidating } = useSWR(setUrl(), fetcher)
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
                    <div>
                        {caught ? (
                        <><div class="cardContainer shaker">
                                    <div class="pokeCard">
                                        <img class="pokePicture foreground" src={sprite} />
                                        <div class="fatCircle" />
                                        <h2 style={{ position: 'absolute', bottom: '235px', fontSize: '20px' }}>#{id}</h2>
                                        <h2 class="foreground" style={{ textTransform: 'capitalize', fontFamily: 'Gill Sans', fontSize: '50px', fontWeight: 'normal', position: 'absolute', bottom: '150px', letterSpacing: '4px' }}>{name}</h2>
                                        <h2 class="foreground" style={{ fontFamily: 'Gill Sans', fontSize: '30px', fontWeight: 'lighter', position: 'absolute', bottom: '125px' }}>has been caught!</h2>
                                        <div class="circle" style={{ backgroundColor: `${bgColor}` }} />
                                        <div class="background" style={{ backgroundColor: `${bgColor}` }} />
                                    </div>
                                </div></>
                    ) : (
                        <><div class="cardContainer shaker">
                                        <div class="pokeCard">
                                            <img class="pokePicture foreground" style={{ filter: 'grayscale(1)' }} src={sprite} />
                                            <div class="fatCircle" />
                                            <h2 style={{ position: 'absolute', bottom: '235px', fontSize: '20px' }}>#{id}</h2>
                                            <h2 class="foreground" style={{ textTransform: 'capitalize', fontFamily: 'Gill Sans', fontSize: '50px', fontWeight: 'normal', position: 'absolute', bottom: '150px', letterSpacing: '4px' }}>{name}</h2>
                                            <h2 class="foreground" style={{fontFamily: 'Gill Sans', fontSize: '30px', fontWeight: 'lighter', position: 'absolute', bottom: '125px' }}>has broken free!</h2>
                                            <div class="circle" style={{ filter: 'grayscale(1)', backgroundColor: `${bgColor}` }} />
                                            <div class="background" style={{ filter: 'grayscale(1)', backgroundColor: `${bgColor}` }} />
                                        </div>
                                    </div></>
                    )}
                    </div>

                    
                </>
            )}
        </>
    )
}