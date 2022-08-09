import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grace Narez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/heart.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Saira&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <div className='flex flex-col space-between bg-gradient-to-b from-purple-100 to-purple-500 items-center'>
        <div>
          <main className='flex flex-cols m-10 items-center'>
            <div>
              <h1 className='text-purple-800 text-7xl p-3 font-extrabold font-concert'>Grace Narez</h1>
              <div className='m-10'>
                <h2 className='text-purple-800 text-3xl font-concert'>download my resume</h2>
                <div className='flex flex-row flex-wrap m-10 justify-center space-x-3'>
                  <a className="hover:text-purple-700" href='/GraceNarez.pdf' download='GraceNarezPDF'><span className="material-symbols-outlined">
                    picture_as_pdf
                  </span></a>
                  <span className='text-purple-800 font-concert'>or</span>
                  <a className="hover:text-purple-700" href='/GraceNarez2.txt' download='GraceNarezTXT'><span className="material-symbols-outlined">
                    text_snippet
                  </span></a>
                </div>
              </div>
            </div>
            <Image
              className='rounded-lg'
              src="/me2.JPEG"
              alt="A proffesional picture of me"
              width={350}
              height={300}
            />
          </main>
        </div>
        <h2 className='text-purple-800 text-3xl font-concert'>about me</h2>
        <div className='p-5 m-10 rounded-md items-center bg-white'>
          <p className='font-saira'>I am a charismatic and self-motivated software engineer, with a passion for solutions as well as learning from failure. The sensation of accomplishment through trial and error drives my passionate and open-minded approach to problem solving. I am malleable to and adaptable to any environment, where I can use my proven strategies to arrive at the needed solution.</p>
        </div>
        <h2 className='text-purple-800 text-3xl font-concert'>technologies</h2>
        <div className='bg-gray-100 m-10 rounded-md'>
          <div className='flex flex-row flex-wrap m-10 justify-center space-x-3 font-saira'>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>HTML5</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>CSS</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>JavaScript</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Python</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Mongoose</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Node</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Express</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Axios</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>EJS</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Bootstrap</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>SQL</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Postgres</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>NoSQL</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Next.js</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Git</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Github</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Slack</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Object-Oriented Programming</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>Sequelize</p>
            <p className='bg-purple-300 p-2 m-2 rounded-md hover:bg-purple-500'>RESTful API</p>
          </div>
        </div>
        <h2 className='text-purple-800 text-3xl font-concert'>projects</h2>
        <div className='flex flex-row flex-wrap m-10 justify-center bg-gray-100 rounded-md font-saira'>
          <div className='flex flex-col p-5 m-10 rounded-md items-center bg-purple-300'>
            <h3 className='text-purple-900'>Rat On A Scooter</h3>
            <Image
              className='rounded-md'
              src="/ratonascooter.png"
              alt="Screenshot of Rat On a Scooter deployed"
              width={300}
              height={150}
            />
            <p>repo with deployed link</p>
            <a className="text-purple-800" href="https://github.com/gracenarez333/rat-on-a-scooter-sei-425">here</a>
          </div>
          <div className='flex flex-col p-5 m-10 rounded-md items-center bg-purple-300'>
            <h3 className='text-purple-800'>Walkie Doggie</h3>
            <Image
              className='rounded-md'
              src="/walkiedoggie.png"
              alt="Screenshot of Walkie Doggie deployed"
              width={300}
              height={150}
            />
            <p>repo with deployed link</p>
            <a className="text-purple-700" href="https://github.com/gracenarez333/walkie-doggie-proj-2"><span className="material-symbols-outlined">
              link
            </span></a>
          </div>
          <div className='flex flex-col p-5 m-10 rounded-md items-center bg-purple-300'>
            <h3 className='text-purple-800'>DettiPOS</h3>
            <Image
              className='rounded-md'
              src="/dettipos.png"
              alt="Screenshot of DettiPOS deployed"
              width={300}
              height={150}
            />
            <p>repo with deployed link</p>
            <a className="text-purple-700" href="https://github.com/gracenarez333/pos-client">here</a>
          </div>
          <div className='flex flex-col p-5 m-10 rounded-md items-center bg-purple-300'>
            <h3 className='text-purple-800'>Star Wars Sheets</h3>
            <Image
              className='rounded-md'
              src="/starwarssheets.png"
              alt="Screenshot of Star Wars Sheets deployed"
              width={300}
              height={150}
            />
            <p>repo with deployed link</p>
            <a className="text-purple-700" href="https://github.com/gracenarez333/star-wars-sheets">here</a>
          </div>
        </div>
        <footer>
          <div className='flex flex-col flex-wrap items-center m-10'>
            <h2 className='text-purple-900 text-3xl font-concert'>contact me</h2>
            <div className='flex p-5 space-x-6'>
              <a className="hover:text-purple-900" href='https://github.com/gracenarez333'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50"
                viewBox="0 0 50 50"
                className=" fill:#000000;">    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path></svg></a>
              <a className="hover:text-purple-900" href='https://www.linkedin.com/in/grace-narez-8b0498238/'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="50" height="50" viewBox="0 0 48 48"
                className=" fill:#000000;"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"></path></svg></a>
            </div>
            <div>
              <p className='text-purple-900'>© 2022 Grace Narez</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
