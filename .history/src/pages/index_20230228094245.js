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
        <Link class="poketitle" stylehref="/"><img src="https://fontmeme.com/permalink/230221/24a5ce1a1e9eeb9339c7150f42b6d65b.png" alt="pokemon-font" border="0"/></Link>
        <div class="wrappa">
          <div class="titleColumns">
            <Link class="menuItem alternate1" href="/random">Get a random Pokemon</Link>
            <Link class="menuItem alternate2" href="/name">Get a Pokemon by name</Link>
            <Link class="menuItem alternate1" href="/types">Get a Pokemon by type</Link>
            <Link class="menuItem alternate2" href="/evolve">Get a Pokemon's next evolution stage</Link>
          </div>
          <div class="titleColumns">
            <Link class="menuItem alternate1" href="/exp">Get a Pokemon's Experience</Link>
            <Link class="menuItem alternate2" href="/battle">Battle two Pokemon</Link>
            <Link class="menuItem alternate1" href="/catch">Try to catch a Pokemon</Link>
          </div>
        </div>              
    </>
  )
}
