import Link from 'next/link'

import styles from './Header.module.css'

import useNavigation from '@/hooks/useNavigation'

import Button from '../Button/Button'

export default function Header({ showChange }) {
  const { navigateToHome } = useNavigation()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Playlist Trivia</Link>
      </h1>
      {showChange && <Button onClick={navigateToHome}>Change playlist</Button>}
    </header>
  )
}
