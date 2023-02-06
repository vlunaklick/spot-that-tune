import { useState, useEffect } from 'react'

import { getPlaylist } from '@/utils'

export default function usePlaylist() {
  const [playlistItems, setPlaylistItems] = useState([])
  const [playlistError, setPlaylistError] = useState(false)

  const [video, setVideo] = useState('')
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState('')

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

  const handleSearchPlaylist = async (e, value) => {
    e.preventDefault()

    const playlistId = value.split('list=')[1]

    if (!playlistId) {
      setPlaylistError(true)
      return
    }

    setPlaylistError(false)

    const data = await getPlaylist(playlistId)

    if (data.error) {
      setPlaylistError(true)
      return
    }

    setPlaylistItems(data.items)
  }

  const restartGame = () => {
    setSelectedVideo('')
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
    playlistError,
    video,
    options,
    selectedOption,
    handleSearchPlaylist,
    restartGame,
    selectOption,
  }
}
