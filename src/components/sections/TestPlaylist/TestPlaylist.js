import Link from 'next/link'

import styles from './TestPlaylist.module.css'

const TEST = [
  {
    title: 'BZRP Music Sessions',
    url: 'https://www.youtube.com/watch?v=A_g3lMcWVy0&list=PL66mZR-Sq4J4xtMm8T2pWGbC_iuuEOVAt',
    playlistId: 'PL66mZR-Sq4J4xtMm8T2pWGbC_iuuEOVAt',
  },
  {
    title: 'BZRP Freestyle Sessions',
    url: 'https://www.youtube.com/watch?v=3W8Ylhm4_8Y&list=PL66mZR-Sq4J5A0UILlOKugx-baoG9O-qU',
    playlistId: 'PL66mZR-Sq4J5A0UILlOKugx-baoG9O-qU',
  },
  {
    title: 'YHLQMDLG - Bad Bunny',
    url: 'https://www.youtube.com/watch?v=Da-CIlJU8I4&list=PLRW7iEDD9RDS2irjCFJo7dkcswBaJZXGG&index=1',
    playlistId: 'PLRW7iEDD9RDS2irjCFJo7dkcswBaJZXGG',
  },
]

export default function TestPlaylist({ video }) {
  if (video) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Playlist for testing</h2>

      {TEST.map(({ title, url, playlistId }) => (
        <div className={styles.linksContainer} key={title}>
          <p className={styles.paragraph}>{title}: </p>
          <Link className={styles.link} href={playlistId}>
            {url}
          </Link>
        </div>
      ))}
    </section>
  )
}
