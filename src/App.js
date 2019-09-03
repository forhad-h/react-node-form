import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Form from './component/Form/Form'

import './App.scss'

function App() {
  return (
    <>
      <ToastContainer />
      <Form />
    </>
  )
}

export default App
