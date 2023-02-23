import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Better PokeAPI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Link href="/"><img src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
        <h2>All Endpoints</h2>
      <Link href="/random">Get a random Pokemon</Link>
      <Link href="/name">Get a Pokemon by name</Link>
      <Link href="/types">Get a Pokemon by type</Link>
      <Link href="/evolve">Get a Pokemon's next evolution stage</Link>
      <Link href="/exp">Get a Pokemon's Experience</Link>
      <Link href="/battle">Battle two Pokemon</Link>
      <Link href="/catch">Try to catch a Pokemon</Link>
      </div>
      
    </>
  )
}
