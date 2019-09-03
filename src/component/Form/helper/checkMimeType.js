export default event => {
  const files = event.target.files
  const types = ['image/png', 'image/jpeg', 'image/gif']
  let err = ''

  for (let i = 0; i < files.length; i++) {
    if (types.every(type => files[i].type !== type)) {
      err += files[i].type + ' is not a supported format\n'
    }
  }

  if (err !== '') {
    event.target.value = null
    console.log(err)
    return false
  }
  return true
}
