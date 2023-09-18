import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"
import axios from "axios"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const App = props => {
  return (
  <><Router />
  <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </>)
}

export default App
