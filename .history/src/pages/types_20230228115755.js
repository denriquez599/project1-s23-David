import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'
import { useRef } from 'react'

const fetcher = async (url) => {
    const res = await axios.get(url)
    console.log(res.data)
    return res.data
}

export default function Name() {
    const inputRef = useRef(null)
    const [name, setName] = useState('');
    function setUrl(){
        let url = "/api/types/" + type;
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
            <Link href="/"><img class="pokepoint" src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            <div>
                    <form onSubmit={handleChange}>
                        <div class="inputForm">
                            <label style={{fontSize: '75px'}} for="name">Hi there! </label>
                            <br></br>
                            <label style={{fontSize: '35px'}} for="name">Which pokemon would you like to find?</label>
                            <br></br>
                            <input style={{width:'150px'}} type="text" id="name" ref={inputRef}/>
                            <br></br>
                            <button type="submit" id="submit">Find!</button>
                        </div>
                        
                    </form>

                    </div>
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
                </>
            )}
        </>
    )
}