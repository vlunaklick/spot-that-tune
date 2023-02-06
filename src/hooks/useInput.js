import { useState } from 'react'

export default function useInput() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const onChange = e => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return { value, error, setError, onChange, reset }
}
