import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"
import axios from "axios"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const App = props => {
  return <Router />
}

export default App
