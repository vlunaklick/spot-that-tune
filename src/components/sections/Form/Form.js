import styles from './Form.module.css'

import useInput from '@/hooks/useInput'

import { validPlaylist } from '@/utils'
import useNavigation from '@/hooks/useNavigation'

export default function Form() {
  const { value, onChange, error, setError } = useInput()
  const { navigateTo } = useNavigation()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!value || value === '') return

    if (!validPlaylist(value)) return setError(true)

    const playlistId = value.split('list=')[1]

    navigateTo(`/${playlistId}`)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.paragraph}>
        Enter the URL of a YouTube playlist to start the game. The playlist must
        be public and it will only use the first 50 videos.
      </p>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter the playlist"
          value={value}
          onChange={onChange}
        />
        <button>Start</button>
      </div>

      {error && <p className={styles.error}>Invalid playlist URL</p>}
    </form>
  )
}
