import React, { useState } from 'react'
import onChangeHandler from './helper/onChangeHandler'
import onSubmitHandler from './helper/onSubmitHandler'

import './Form.scss'

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState([])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form method="post" action="#" className="rn-form">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={onChangeHandler.bind({}, setSelectedFiles)}
              />
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={onSubmitHandler.bind({}, selectedFiles)}
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
