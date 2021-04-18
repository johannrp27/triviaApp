import React from 'react'
import Navigation from './Navigation/Navigation'
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100">
        <div className="offset-sm-2 offset-lg-3 col-12 col-sm-8 col-lg-6 ">
          <Navigation/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
