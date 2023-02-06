import styles from './Video.module.css'

export default function Video({ playlistItems, video, selectedOption }) {
  if (playlistItems.length <= 0) return null

  const blurStyle = {
    transition: 'all 0.5s ease',
    filter: selectedOption !== '' ? 'none' : 'blur(25px)',
  }

  return (
    <>
      <section className={styles.section}>
        <iframe
          className={styles.iframe}
          style={blurStyle}
          src={`https://www.youtube.com/embed/${
            video && video.snippet.resourceId.videoId
          }?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  )
}
