import maxSelectFile from './maxSelectFile'
import checkMimeType from './checkMimeType'

export default (setSelectedFiles, event) => {
  if (maxSelectFile(event) && checkMimeType(event)) {
    setSelectedFiles(event.target.files)
  }
}
