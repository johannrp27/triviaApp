import React from 'react'
// import Header from './components/Header/Header'
import MainPage from './components/MainPage'
import './scss/App.scss'
function App () {
  return (
    <div className="App">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          <div className="offset-sm-2 offset-lg-3 col-12 col-sm-8 col-lg-6 ">
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
