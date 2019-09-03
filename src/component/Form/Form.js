import React, { useState, useEffect } from 'react'
import { Progress } from 'reactstrap'
import { toast } from 'react-toastify'
import onChangeHandler from './helper/onChangeHandler'
import onSubmitHandler from './helper/onSubmitHandler'

import './Form.scss'

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [loaded, setLoaded] = useState(0)
  let uploadElm = React.createRef()

  useEffect(() => {
    if (loaded === 100) {
      toast.success('File uploaded!')
      uploadElm.current.value = ''
    }
  })

  Math.round(loaded)
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
                ref={uploadElm}
              />
            </div>
            <div className="form-group">
              <Progress max="100" color="success" value={Math.round(loaded)}>
                {Math.round(loaded)}%
              </Progress>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={onSubmitHandler.bind({}, selectedFiles, setLoaded)}
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
