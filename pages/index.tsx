import type { NextPage } from 'next'
import Head from 'next/head'
import github from '../img/GitHub-logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import bella from '../img/bella.jpg'
import kovu from '../img/kovu.jpg'
import tigger from '../img/tigger.jpg'
import wife from '../img/wife.jpg'

const Home: NextPage = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-stone-50">
      <Head>
        <title>I am Taylor!</title>

      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1>
          Hi I am Taylor White! This is my super simple about me.
        </h1>
      </main>

      Here is my GitHub
      <Link href='https://github.com/TaylorWhite21'>
        <Image src={github}/>
      </Link>
      

      <h1>A game I made</h1>
      <iframe width="552" height="200"  src="https://itch.io/embed/1030243"><a href="https://penkey21.itch.io/project-to-the-moon">Project To the moon by penkey21</a></iframe>
        
      <br>
      </br>
      <h1>I have 3 needy furbabies</h1>
      <Image src={bella} width='600' height='600'/>
      <Image src={kovu} width='600' height='600'/>
      <Image src={tigger} width='600' height='600'/>

      <h1> Married to my best friend</h1>
      <Image src={wife} width='600' height='600'/>
      <footer className="flex items-center justify-center w-full h-24 border-t">
      
      </footer>
    </div>
  )
}

export default Home
