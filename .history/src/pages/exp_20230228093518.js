import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import { useState } from 'react'
import { useRef } from 'react'
const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}

export default function Exp() {
    const nameRef = useRef(null)
    const levelRef = useRef(null)
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    function setUrl(){
        let url = `/api/experience/${name}?name=${name}&level=${level}`;
        console.log(url)
        return url;
    }
    const handleChange = () => {
        setName(nameRef.current.value);
        setLevel(levelRef.current.value)
      };
    const { data, error, isLoading, isValidating } = useSWR(setUrl(), fetcher)
    if (isLoading) return <div>Loading</div>
    if (!data) return (
        <>
            <Link href="/"><img class="pokepoint" src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            <form onSubmit={handleChange}>
                <div class="inputForm">
                    <label style={{fontSize: '75px'}} for="name">Hi there! </label>
                    <br></br>
                    <label style={{fontSize: '35px'}} for="name">Which pokemon would you like to find the experience of?</label>
                    <br></br>                       
                    <input type="text" id="name" ref={nameRef}/>
                    <label for="level">What level are they? </label>
                    <input type="text" id="level" ref={levelRef}/>
                    <p></p>
                    <button type="submit" id="submit" >Submit</button>
                </div>
                        
            </form>
        </>
    )
    let { id, pokeName, sprite, types, bgColor, experience } = data

    return (
        <>
            <Link href="/"><img class="pokepoint" src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
            {isValidating ? (
                <h2>Validating</h2>
            ) : (
                <>
                    <div class="cardContainer">
                    <div class="pokeCard">
                        <img class="pokePicture foreground" src={sprite} />
                        <div class="fatCircle"  />
                        <h2 style={{position: 'absolute', bottom: '235px', fontSize: '20px'}}>{id}</h2>
                        <h2 class="foreground" style={{textTransform: 'capitalize', fontFamily:'Gill Sans', fontSize:'50px', fontWeight:'normal', position: 'absolute', bottom: '150px', letterSpacing: '4px'}}>{name}</h2>
                        <h2 class="foreground" style={{textTransform: 'capitalize', fontFamily:'Gill Sans', fontSize: '15px', fontWeight:'lighter', position: 'absolute', bottom: '150px'}}>Type: {types.map(type => <span>{type} </span>)}</h2>
                        <h2 class="foreground" style={{textTransform: 'capitalize', fontFamily:'Gill Sans', fontSize: '15px', fontWeight:'lighter', position: 'absolute', bottom: '150px'}}>Level {level}</h2>
                        <h2 class="foreground" style={{textTransform: 'capitalize', fontFamily:'Gill Sans', fontSize: '15px', fontWeight:'lighter', position: 'absolute', bottom: '150px'}}>{experience}xp</h2>
                        <div class="circle" style={{backgroundColor: `${bgColor}` }} />
                        <div class="background" style={{backgroundColor: `${bgColor}` }}/>
                        
                    </div>
                </div>
                </>
            )}
        </>
    )
}