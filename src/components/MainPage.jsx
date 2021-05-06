import React from 'react'
import Navigation from './Navigation/Navigation'
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="d-flex dynamic flex-column justify-content-center align-items-center py-5">
      <div className="row container">
        <div className="offset-sm-1 offset-lg-3 col-12 col-sm-10 col-lg-6">
          <Navigation/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
