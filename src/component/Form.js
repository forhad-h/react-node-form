import React, { useState } from 'react'
import axios from 'axios'

import './Form.scss'

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState([])

  const onChangeHandler = event => {
    if (maxSelectFile(event)) {
      setSelectedFiles(event.target.files)
    }
  }

  const onSubmitHandler = async () => {
    const data = new FormData()
    for (let i = 0; i < selectedFiles.length; i++) {
      data.append('file', selectedFiles[i])
    }
    await axios.post('http://localhost:8000/upload', data)
  }

  const maxSelectFile = event => {
    const files = event.target.files
    if (files.length > 3) {
      const msg = 'Only 3 files can be uploaded at a time'
      event.target.value = ''
      console.log(msg)
      return false
    }
    return true
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form method='post' action='#' className='rn-form'>
            <div className='form-group files'>
              <label>Upload Your File </label>
              <input
                type='file'
                className='form-control'
                multiple
                onChange={onChangeHandler}
              />
              <button
                type='button'
                className='btn btn-success btn-block'
                onClick={onSubmitHandler}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
