import axios from 'axios'

export default async (selectedFiles, setLoaded) => {
  const data = new FormData()
  for (let i = 0; i < selectedFiles.length; i++) {
    data.append('file', selectedFiles[i])
  }

  if (selectedFiles.length !== 0) {
    await axios.post('http://localhost:8000/upload', data, {
      onUploadProgress: ProgressEvent => {
        setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100)
      }
    })
  }
}
