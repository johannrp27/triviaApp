import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './i18n'
import './scss/main.scss'
import * as serviceWorker from './swRegister'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.register()
