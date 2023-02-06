import Head from 'next/head'
import { useEffect } from 'react'

import usePlaylist from '@/hooks/usePlaylist'

import styles from '@/styles/Home.module.css'
import Options from '@/components/sections/Options/Options'
import Result from '@/components/sections/Result/Result'
import Form from '@/components/sections/Form/Form'
import Video from '@/components/app/Video/Video'
import Header from '@/components/app/Header/Header'

export default function Home() {
  const {
    playlistItems,
    playlistError,
    video,
    options,
    selectedOption,
    handleSearchPlaylist,
    selectOption,
    nextVideo,
    restartGame,
  } = usePlaylist()

  useEffect(() => {
    const firstTimePlaylist =
      'https://www.youtube.com/watch?v=A_g3lMcWVy0&list=PL66mZR-Sq4J4xtMm8T2pWGbC_iuuEOVAt'
    handleSearchPlaylist(firstTimePlaylist)
  }, [])

  return (
    <>
      <Head>
        <title>Playlist trivia</title>
      </Head>
      <Header restartGame={restartGame} />
      <main className={styles.main}>
        <Form
          handleSearchPlaylist={handleSearchPlaylist}
          playlistError={playlistError}
          video={video}
        />

        <Video
          playlistItems={playlistItems}
          video={video}
          selectedOption={selectedOption}
          restartGame={restartGame}
        />

        <Options
          options={options}
          selectOption={selectOption}
          selectedOption={selectedOption}
        />

        <Result
          selectedOption={selectedOption}
          playlistsItems={playlistItems}
          nextVideo={nextVideo}
          video={video}
          restartGame={restartGame}
        />
      </main>
    </>
  )
}
