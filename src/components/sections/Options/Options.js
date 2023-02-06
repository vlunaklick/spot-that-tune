import Button from '../../app/Button/Button'

import styles from './Options.module.css'

export default function Options({ options, selectedOption, selectOption }) {
  if (options.length === 0 || selectedOption !== '') return null

  return (
    <section className={styles.section}>
      {options.map(option => {
        return (
          <Button
            key={option.snippet.resourceId.videoId}
            onClick={() => selectOption(option.snippet.resourceId.videoId)}
          >
            {option.snippet.title}
          </Button>
        )
      })}
    </section>
  )
}
