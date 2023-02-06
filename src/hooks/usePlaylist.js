import { useState, useEffect } from 'react'

export default function usePlaylist({ initialPlaylistItems }) {
  const [playlistItems, setPlaylistItems] = useState([])

  const [video, setVideo] = useState('')
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    if (initialPlaylistItems.length > 0) {
      setPlaylistItems(initialPlaylistItems)
    }
  }, [initialPlaylistItems])

  useEffect(() => {
    if (playlistItems.length > 0) {
      const randomVideo =
        playlistItems[Math.floor(Math.random() * playlistItems.length)]

      setVideo(randomVideo)

      const options = playlistItems
        .filter(item => {
          return (
            item.snippet.resourceId.videoId !==
            randomVideo.snippet.resourceId.videoId
          )
        })
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .concat(randomVideo)
        .sort(() => Math.random() - 0.5)

      setOptions(options)
    }
  }, [playlistItems])

  const nextVideo = () => {
    setSelectedOption('')
    if (playlistItems.length === 1) {
      setPlaylistItems([])
      return
    }

    const removedVideo = playlistItems.filter(
      item =>
        item.snippet.resourceId.videoId !== video.snippet.resourceId.videoId
    )

    setPlaylistItems(removedVideo)
  }

  const selectOption = videoId => {
    setSelectedOption(videoId)
  }

  return {
    playlistItems,
    video,
    options,
    selectedOption,
    selectOption,
    nextVideo,
  }
}
