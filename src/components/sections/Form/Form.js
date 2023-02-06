import useInput from '@/hooks/useInput'

import styles from './Form.module.css'

export default function Form({ handleSearchPlaylist, playlistError, video }) {
  const { value, onChange, reset } = useInput()

  if (video) return null

  const handleSubmit = async e => {
    e.preventDefault()

    if (value) {
      await handleSearchPlaylist(value)
      reset()
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.paragraph}>
        Enter the URL of a YouTube playlist to start the game. The playlist must
        be public and have at most 50 videos.
      </p>

      <div>
        <input
          type="text"
          placeholder="Enter the playlist"
          value={value}
          onChange={onChange}
        />
        <button>Start</button>
      </div>

      {playlistError && <p className={styles.error}>Invalid playlist URL</p>}
    </form>
  )
}
