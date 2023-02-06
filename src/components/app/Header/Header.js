import styles from './Header.module.css'

import Button from '../Button/Button'

export default function Header({ restartGame }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Playlist Trivia</h1>
      <Button onClick={restartGame}>Select Playlist</Button>
    </header>
  )
}
