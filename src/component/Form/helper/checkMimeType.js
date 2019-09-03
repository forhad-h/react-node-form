import { toast } from 'react-toastify'

export default event => {
  const files = event.target.files
  const types = ['image/png', 'image/jpeg', 'image/gif']
  let err = []

  for (let i = 0; i < files.length; i++) {
    if (types.every(type => files[i].type !== type)) {
      err[i] = files[i].type + ' is not a supported format\n'
    }
  }

  if (err.length > 0) {
    event.target.value = null
    err.forEach(e => {
      toast.error(e)
    })
  }
  return true
}
