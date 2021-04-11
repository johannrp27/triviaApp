import React from 'react'
import Welcome from './Welcome/Welcome'
import logo from '../static/icons/triviaPerson.svg'
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="container h-100">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <div className="row">
          <div className="col-8">
            <div className="h1 text-white">TRIVIA GAME</div>
          </div>
          <div className="col-4 position-relative">
            <img className="img-fluid position-absolute trivia" src={logo} alt="Person Trivia" />
          </div>
          <div className="col-12">
            <div className="card shadow-lg">
              <Welcome />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
