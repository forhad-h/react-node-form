import axios from 'axios'

export default async selectedFiles => {
  const data = new FormData()
  for (let i = 0; i < selectedFiles.length; i++) {
    data.append('file', selectedFiles[i])
  }
  await axios.post('http://localhost:8000/upload', data)
}
