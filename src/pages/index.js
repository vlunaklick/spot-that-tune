import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import Form from '@/components/sections/Form/Form'
import Header from '@/components/app/Header/Header'
import TestPlaylist from '@/components/sections/TestPlaylist/TestPlaylist'

export default function Home() {
  return (
    <>
      <Head>
        <title>Playlist Trivia</title>
      </Head>
      <Header showChange={false} />
      <main className={styles.main}>
        <Form />

        <TestPlaylist />
      </main>
    </>
  )
}
