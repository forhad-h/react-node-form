import { toast } from 'react-toastify'

export default event => {
  const files = event.target.files
  const fileSize = 2000000
  let err = ''

  for (let i = 0; i < files.length; i++) {
    if (files[i].size > fileSize) {
      err += `${files[i].name} is too large, max file size is: ${fileSize /
        1000}kb\n`
    }
  }

  if (err !== '') {
    event.target.value = null
    toast.error(err)
  }

  return true
}
