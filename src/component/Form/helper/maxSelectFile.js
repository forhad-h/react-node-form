export default event => {
  const files = event.target.files
  if (files.length > 3) {
    const msg = 'Only 3 files can be uploaded at a time'
    event.target.value = ''
    console.log(msg)
    return false
  }
  return true
}