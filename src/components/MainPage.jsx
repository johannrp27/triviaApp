import React from 'react'
// import Welcome from './Welcome/Welcome'
import logo from '../static/icons/triviaPerson.svg'
import './MainPage.scss'
import Question from './Question/Question'

const MainPage = () => {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100">
        <div className="offset-sm-2 offset-lg-3 col-12 col-sm-8 col-lg-6 ">
          <div className="header">
            <div >
              <div className="h1 text-white">TRIVIA GAME</div>
            </div>
            <div className="position-relative">
              <img className="img-fluid position-absolute trivia" src={logo} alt="Person Trivia" />
            </div>
          </div>
          <div className="card shadow-lg">
            <Question />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
