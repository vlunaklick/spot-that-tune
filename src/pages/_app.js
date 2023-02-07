import Head from 'next/head'

import '@/styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spot That Tune</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Spot That Tune is an entertaining trivia game that tests your music knowledge. You can play using your favorite YouTube playlists - just enter the playlist URL and the game will show you four song options. See if you can guess the correct answer and have fun while doing so!"
        />
        <meta name="author" content="Spot That Tune" />
        <meta
          name="keywords"
          content="Spot That Tune, trivia, game, YouTube, playlists, songs, options, answer, music, knowledge, challenge, fun, guessing."
        />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
