import Head from 'next/head'
import Slider from './Slider'
import { SliderData } from './SliderData'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
         <Slider slides={SliderData}/>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
