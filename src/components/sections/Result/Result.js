import styles from './Result.module.css'

import Button from '../../app/Button/Button'

export default function Result({
  selectedOption,
  playlistsItems,
  nextVideo,
  video,
  restartGame,
}) {
  if (selectedOption === '' || playlistsItems < 1) return null

  const status = selectedOption === video.snippet.resourceId.videoId

  const statusText = status ? 'Correct' : 'Wrong'

  if (playlistsItems.length === 1)
    return (
      <section className={styles.section}>
        <p className={status ? styles.correct : styles.wrong}>{statusText}!</p>
        <p>
          The correct answer was:{' '}
          <span className={styles.correctAnswer}>{video.snippet.title}</span>
        </p>
        <Button onClick={restartGame}>Select Playlist</Button>
      </section>
    )

  return (
    <section className={styles.section}>
      <p className={status ? styles.correct : styles.wrong}>{statusText}!</p>
      <p>
        The correct answer was:{' '}
        <span className={styles.correctAnswer}>{video.snippet.title}</span>
      </p>
      <Button onClick={nextVideo}>Next video</Button>
    </section>
  )
}
