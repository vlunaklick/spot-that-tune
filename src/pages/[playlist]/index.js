import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import { getPlaylist } from '@/utils'
import usePlaylist from '@/hooks/usePlaylist'

import Header from '@/components/app/Header/Header'
import Options from '@/components/sections/Options/Options'
import Result from '@/components/sections/Result/Result'
import Video from '@/components/app/Video/Video'

export default function Playlist({ initialPlaylistItems }) {
  const {
    playlistItems,
    video,
    options,
    selectedOption,
    selectOption,
    nextVideo,
  } = usePlaylist({ initialPlaylistItems })

  return (
    <>
      <Head>
        <title>Guess the video</title>
      </Head>
      <Header showChange={true} />
      <main className={styles.main}>
        <Video
          playlistItems={playlistItems}
          video={video}
          selectedOption={selectedOption}
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
        />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { playlist } = context.query

  if (!playlist) {
    return {
      props: {
        initialPlaylistItems: [],
      },
    }
  }

  const data = await getPlaylist(playlist)

  if (data.error) {
    return {
      props: {
        initialPlaylistItems: [],
      },
    }
  }

  return {
    props: {
      initialPlaylistItems: data.items,
    },
  }
}
