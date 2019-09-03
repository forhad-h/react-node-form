import maxSelectFile from './maxSelectFile'
import checkMimeType from './checkMimeType'
import checkFileSize from './checkFileSize'

export default (setSelectedFiles, event) => {
  if (maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)) {
    setSelectedFiles(event.target.files)
  }
}
