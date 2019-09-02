import React, { useState } from 'react'
import axios from 'axios'

import './Form.scss'

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(0)
  const onChangeHandler = event => {
    setSelectedFile(event.target.files[0])
  }
  const onSubmitHandler = async () => {
    const data = new FormData()
    data.append('file', selectedFile)
    await axios.post('http://localhost:8000/upload', data)
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
                multiple=''
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
