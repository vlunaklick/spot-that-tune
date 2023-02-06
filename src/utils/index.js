export const getPlaylist = async playlistId => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
  )

  const data = await res.json()

  return data
}

export const validPlaylist = url => {
  const playlistId = url.split('list=')[1]

  if (!playlistId) return false

  return true
}
